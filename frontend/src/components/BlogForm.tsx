import { useState } from "react";
import { Save } from "lucide-react";

function BlogForm({ initialData, onSubmit, buttonText = "Publish Post" }) {
  const [title, setTitle] = useState(initialData?.title || "");
  const [category, setCategory] = useState(initialData?.category || "Technology");
  const [content, setContent] = useState(initialData?.content || "");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      return;
    }

    onSubmit({
      title: title.trim(),
      category,
      content: content.trim(),
    });
  };

  return (
    <form className="blog-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          placeholder="Give your post a great title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label>Category</label>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Technology</option>
          <option>Programming</option>
          <option>AI</option>
          <option>Docker</option>
          <option>DevOps</option>
          <option>Personal</option>
        </select>
      </div>

      <div className="form-group">
        <label>Content</label>

        <textarea
          placeholder="Write your story..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="12"
          required
        />
      </div>

      <button className="submit-button" type="submit">
        <Save size={18} />
        {buttonText}
      </button>
    </form>
  );
}

export default BlogForm;