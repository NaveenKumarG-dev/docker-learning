import { PenLine } from "lucide-react";
import { Link } from "react-router-dom";

function EmptyState() {
  return (
    <div className="empty-state">
      <div className="empty-icon">
        <PenLine size={28} />
      </div>

      <h2>No posts yet</h2>

      <p>
        Your blog is waiting for its first story. Start writing something
        awesome.
      </p>

      <Link to="/create" className="create-button">
        Create your first post
      </Link>
    </div>
  );
}

export default EmptyState;