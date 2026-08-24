from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from pydantic import BaseModel

from database import engine, Base, get_db
from model import Blog


Base.metadata.create_all(bind=engine)

app = FastAPI(title="Inkly Blog API")


class BlogCreate(BaseModel):
    title: str
    category: str
    content: str


class BlogResponse(BlogCreate):
    id: int
    created_at: str
    updated_at: str | None = None


@app.get("/")
def root():
    return {"message": "Inkly Blog API is running"}


@app.get("/blogs")
def get_blogs(db: Session = Depends(get_db)):
    return db.query(Blog).order_by(Blog.created_at.desc()).all()


@app.get("/blogs/{blog_id}")
def get_blog(blog_id: int, db: Session = Depends(get_db)):
    blog = db.query(Blog).filter(Blog.id == blog_id).first()

    if not blog:
        raise HTTPException(
            status_code=404,
            detail="Blog not found"
        )

    return blog


@app.post("/blogs")
def create_blog(
    blog_data: BlogCreate,
    db: Session = Depends(get_db)
):
    blog = Blog(
        title=blog_data.title,
        category=blog_data.category,
        content=blog_data.content
    )

    db.add(blog)
    db.commit()
    db.refresh(blog)

    return blog


@app.put("/blogs/{blog_id}")
def update_blog(
    blog_id: int,
    blog_data: BlogCreate,
    db: Session = Depends(get_db)
):
    blog = db.query(Blog).filter(Blog.id == blog_id).first()

    if not blog:
        raise HTTPException(
            status_code=404,
            detail="Blog not found"
        )

    blog.title = blog_data.title
    blog.category = blog_data.category
    blog.content = blog_data.content

    db.commit()
    db.refresh(blog)

    return blog


@app.delete("/blogs/{blog_id}")
def delete_blog(
    blog_id: int,
    db: Session = Depends(get_db)
):
    blog = db.query(Blog).filter(Blog.id == blog_id).first()

    if not blog:
        raise HTTPException(
            status_code=404,
            detail="Blog not found"
        )

    db.delete(blog)
    db.commit()

    return {
        "message": "Blog deleted successfully"
    }