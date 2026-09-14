export const DEFAULT_POSTS = [
  {
    id: 1001,
    title: "Understanding Docker Basics",
    category: "DevOps",
    content: "Docker simplifies the process of managing application processes in containers. Let's explore how it works in detail.",
    created_at: new Date().toISOString()
  },
  {
    id: 1002,
    title: "Why React is Still Awesome",
    category: "Frontend",
    content: "React ecosystem has grown so much. With Vite and new frameworks, it's faster than ever. State management is also a breeze.",
    created_at: new Date(Date.now() - 86400000).toISOString()
  },
  {
    id: 1003,
    title: "Mastering FastAPI",
    category: "Backend",
    content: "FastAPI is a modern, fast web framework for building APIs with Python 3.7+ based on standard Python type hints. It's fantastic.",
    created_at: new Date(Date.now() - 86400000 * 2).toISOString()
  },
  {
    id: 1004,
    title: "Deploying to GitHub Pages",
    category: "CI/CD",
    content: "GitHub Pages combined with GitHub Actions is a powerful way to host your static sites for free, straight from your repository.",
    created_at: new Date(Date.now() - 86400000 * 3).toISOString()
  },
  {
    id: 1005,
    title: "PostgreSQL over SQLite",
    category: "Database",
    content: "While SQLite is great for development, PostgreSQL offers robustness, concurrency, and rich features for production applications.",
    created_at: new Date(Date.now() - 86400000 * 4).toISOString()
  },
  {
    id: 1006,
    title: "The Magic of CSS Flexbox",
    category: "Design",
    content: "Flexbox makes it simple to align elements and distribute space within a container, even when their size is unknown.",
    created_at: new Date(Date.now() - 86400000 * 5).toISOString()
  },
  {
    id: 1007,
    title: "State Management in 2024",
    category: "Frontend",
    content: "Zustand, Jotai, or just React Context? Exploring state management solutions in modern React applications.",
    created_at: new Date(Date.now() - 86400000 * 6).toISOString()
  },
  {
    id: 1008,
    title: "Docker Compose for Local Dev",
    category: "DevOps",
    content: "Docker Compose allows you to define and run multi-container Docker applications seamlessly with a single YAML configuration file.",
    created_at: new Date(Date.now() - 86400000 * 7).toISOString()
  },
  {
    id: 1009,
    title: "Clean Code Principles",
    category: "Software Engineering",
    content: "Writing code that is easy to read, understand, and maintain is an essential skill for any software engineer. Always refactor.",
    created_at: new Date(Date.now() - 86400000 * 8).toISOString()
  },
  {
    id: 1010,
    title: "Building Resilient APIs",
    category: "Backend",
    content: "Implementing proper error handling, rate limiting, and fallback mechanisms ensures your APIs stay robust under load.",
    created_at: new Date(Date.now() - 86400000 * 9).toISOString()
  }
];
