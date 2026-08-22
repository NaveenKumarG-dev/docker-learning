import { Link } from "react-router-dom";
import { PenLine, Plus } from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="logo">
          <span className="logo-mark">
            <PenLine size={19} />
          </span>
          <span>Inkly</span>
        </Link>

        <Link to="/create" className="create-button">
          <Plus size={18} />
          New Post
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;