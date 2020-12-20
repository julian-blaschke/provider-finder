import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="flex justify-between py-2 px-4 shadow">
      <Link to="/"> Home</Link>
      <span>🌞</span>
    </nav>
  );
}

export default NavBar;
