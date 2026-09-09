import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BlogForm from "../components/BlogForm";
import { getBlog, updateBlog as saveBlog } from "../api";

function EditBlog() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState(null);

  useEffect(() => {
    getBlog(id)
      .then(setBlog)
      .catch(() => navigate("/"));
  }, [id, navigate]);

  const updateBlog = async (data) => {
    await saveBlog(id, data);
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