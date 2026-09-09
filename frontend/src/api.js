const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

async function request(path, options = {}) {
  const response = await fetch(`${API_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.detail || "Something went wrong");
  }

  return response.status === 204 ? null : response.json();
}

export const getBlogs = () => request("/blogs");
export const getBlog = (id) => request(`/blogs/${id}`);
export const createBlog = (blog) =>
  request("/blogs", { method: "POST", body: JSON.stringify(blog) });
export const updateBlog = (id, blog) =>
  request(`/blogs/${id}`, { method: "PUT", body: JSON.stringify(blog) });
export const deleteBlog = (id) => request(`/blogs/${id}`, { method: "DELETE" });