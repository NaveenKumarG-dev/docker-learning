import { useNavigate } from "react-router-dom";
import BlogForm from "../components/BlogForm";
import { createBlog as saveBlog } from "../api";

function CreateBlog() {
  const navigate = useNavigate();

  const createBlog = async (data) => {
    await saveBlog(data);
    navigate("/");
  };

  return (
    <section className="form-page">
      <div className="page-heading">
        <span>CREATE</span>
        <h1>Write something.</h1>
        <p>Turn your thoughts into your next great post.</p>
      </div>

      <BlogForm onSubmit={createBlog} />
    </section>
  );
}

export default CreateBlog;