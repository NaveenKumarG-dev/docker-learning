import { useEffect, useState } from "react";
import { BookOpen, Search } from "lucide-react";
import BlogCard from "../components/BlogCard";
import EmptyState from "../components/EmptyState";
import { deleteBlog as removeBlog, getBlogs } from "../api";

import { DEFAULT_POSTS } from "../defaultPosts";

function Home() {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    getBlogs()
      .then((data) => {
        setBlogs(data);
        setError("");
        setIsOffline(false);
      })
      .catch((requestError) => {
        console.warn("Backend unavailable, falling back to default posts", requestError);
        setBlogs(DEFAULT_POSTS);
        setIsOffline(true);
        setError(""); // clear error so it displays the grid
      });
  }, []);

  const deleteBlog = async (id) => {
    try {
      await removeBlog(id);
      setBlogs((currentBlogs) => currentBlogs.filter((blog) => blog.id !== id));
    } catch (requestError) {
      setError(requestError.message);
    }
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

      {error ? (
        <div className="no-results">
          <h3>Could not load posts</h3>
          <p>{error}</p>
        </div>
      ) : blogs.length === 0 ? (
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