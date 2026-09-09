import { Link } from "react-router-dom";
import { Calendar, Edit3, Trash2, ArrowUpRight } from "lucide-react";

function BlogCard({ blog, onDelete }) {
  return (
    <article className="blog-card">
      <div className="blog-card-content">
        <div className="blog-card-top">
          <span className="category">{blog.category}</span>

          <button
            className="icon-button delete-button"
            onClick={() => onDelete(blog.id)}
            title="Delete post"
          >
            <Trash2 size={17} />
          </button>
        </div>

        <h2>{blog.title}</h2>

        <p>{blog.content}</p>

        <div className="blog-card-footer">
          <div className="date">
            <Calendar size={15} />
            {new Date(blog.created_at).toLocaleDateString()}
          </div>

          <div className="card-actions">
            <Link to={`/edit/${blog.id}`} className="edit-link">
              <Edit3 size={15} />
              Edit
            </Link>

            <Link to={`/edit/${blog.id}`} className="read-link">
              Read
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export default BlogCard;