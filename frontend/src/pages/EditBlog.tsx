import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BlogForm from "../components/BlogForm";

function EditBlog() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
    const existingBlog = blogs.find((blog) => blog.id === id);

    if (!existingBlog) {
      navigate("/");
      return;
    }

    setBlog(existingBlog);
  }, [id, navigate]);

  const updateBlog = (data) => {
    const blogs = JSON.parse(localStorage.getItem("blogs")) || [];

    const updatedBlogs = blogs.map((item) =>
      item.id === id
        ? {
            ...item,
            ...data,
            updatedAt: new Date().toISOString(),
          }
        : item
    );

    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));

    navigate("/");
  };

  if (!blog) {
    return null;
  }

  return (
    <section className="form-page">
      <div className="page-heading">
        <span>EDIT POST</span>
        <h1>Refine your story.</h1>
        <p>Make your ideas even better.</p>
      </div>

      <BlogForm
        initialData={blog}
        onSubmit={updateBlog}
        buttonText="Save Changes"
      />
    </section>
  );
}

export default EditBlog;