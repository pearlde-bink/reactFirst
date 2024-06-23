import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Tuanbink blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link
          to="/create"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "9px",
          }}
        >
          New Blog
        </Link>
        <Link to="/about">About</Link>
        <Link to="/blogs/:id">The blog</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/bloglist">Bloglist</Link>
      </div>
    </nav>
  );
};

export default Navbar;
