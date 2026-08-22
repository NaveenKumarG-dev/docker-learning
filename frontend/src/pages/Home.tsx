import { useEffect, useState } from "react";
import { BookOpen, Search } from "lucide-react";
import BlogCard from "../components/BlogCard";
import EmptyState from "../components/EmptyState";

function Home() {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    setBlogs(storedBlogs);
  }, []);

  const deleteBlog = (id) => {
    const updatedBlogs = blogs.filter((blog) => blog.id !== id);

    setBlogs(updatedBlogs);
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
  };

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.content.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section>
      <div className="hero">
        <div>
          <div className="hero-label">
            <BookOpen size={16} />
            Personal Blog
          </div>

          <h1>
            Ideas worth
            <span> sharing.</span>
          </h1>

          <p>
            A simple space to write, explore and share thoughts about
            technology, life and everything in between.
          </p>
        </div>
      </div>

      <div className="toolbar">
        <h2>Latest posts</h2>

        {blogs.length > 0 && (
          <div className="search-box">
            <Search size={17} />
            <input
              type="text"
              placeholder="Search posts..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        )}
      </div>

      {blogs.length === 0 ? (
        <EmptyState />
      ) : filteredBlogs.length === 0 ? (
        <div className="no-results">
          <h3>No posts found</h3>
          <p>Try searching for something else.</p>
        </div>
      ) : (
        <div className="blog-grid">
          {filteredBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} onDelete={deleteBlog} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Home;