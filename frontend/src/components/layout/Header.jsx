import "./Header.css";
import { Link } from "react-router-dom";
// import headerImage from "@assets/192.png";

export default function Header() {
  return (
    <header className="site-header">
      <Link to="/" className="header-link">
        <div className="header-overlay">
          {/* <img src={headerImage} alt="Site Logo" className="site-logo" /> */}
          <h1 className="site-title">Little Atelier</h1>
        </div>
      </Link>
    </header>
  );
}
