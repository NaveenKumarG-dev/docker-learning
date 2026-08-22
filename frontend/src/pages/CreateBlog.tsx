import { useNavigate } from "react-router-dom";
import BlogForm from "../components/BlogForm";

function CreateBlog() {
  const navigate = useNavigate();

  const createBlog = (data) => {
    const blogs = JSON.parse(localStorage.getItem("blogs")) || [];

    const newBlog = {
      id: crypto.randomUUID(),
      ...data,
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem("blogs", JSON.stringify([newBlog, ...blogs]));

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