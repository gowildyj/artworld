import "./Header.css";
// import headerImage from "@assets/192.png";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-overlay">
        {/* <img src={headerImage} alt="Site Logo" className="site-logo" /> */}
        <h1 className="site-title">Little Atelier</h1>
      </div>
    </header>
  );
}
