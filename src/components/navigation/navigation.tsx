import "./navigation.css";
import { Link } from "@tanstack/react-router";
const Navigation = ({ className }: { className: string }) => {
  return (
    <nav className={className}>
      <ul className="nav-list" role="list">
        <li>
          <Link to="/" className="nav-link">
            home
          </Link>
        </li>
        <li>
          <Link
            to="/$category/"
            params={{ category: "headphones" }}
            className="nav-link"
          >
            headphones
          </Link>
        </li>
        <li>
          <Link
            to="/$category/"
            params={{ category: "speakers" }}
            className="nav-link"
          >
            speakers
          </Link>
        </li>
        <li>
          <Link
            to="/$category/"
            params={{ category: "earphones" }}
            className="nav-link"
          >
            earphones
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
