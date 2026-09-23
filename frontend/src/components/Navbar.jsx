import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-logo">PG Finder</h2>

      <div className="navbar-links">
        <a href="#">Home</a>
        <a href="#">Browse PGs</a>
        <a href="#">Login</a>
      </div>
    </nav>
  );
}

export default Navbar;