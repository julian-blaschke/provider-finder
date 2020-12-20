import { Link } from "react-router-dom";
import { useThemeContext } from "../context/ThemeContext";

function NavBar() {
  const { theme, setTheme } = useThemeContext();
  return (
    <nav className="flex justify-between py-2 px-4 shadow">
      <Link to="/" className="text-gray-900 dark:text-gray-100">
        Home
      </Link>
      <span
        className="cursor-pointer"
        onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
      >
        {theme === "dark" ? "🌞" : "🌙"}
      </span>
    </nav>
  );
}

export default NavBar;
