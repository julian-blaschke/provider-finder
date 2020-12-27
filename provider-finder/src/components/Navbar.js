import { Link } from "react-router-dom";
import { useThemeContext } from "../context/ThemeContext";
import bulb from "../img/bulb.png";

function NavBar() {
  const { setTheme, theme } = useThemeContext();
  console.log(theme);
  return (
    <nav className="flex justify-between py-2 px-4 shadow">
      <Link to="/" className="text-gray-900 dark:text-gray-100">
        Home
      </Link>
      <span
        className="cursor-pointer"
        onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
      >
        <img
          src={bulb}
          alt="switch"
          className={`w-5 transition transform duration-500 ${
            theme === "dark" ? "rotate-180" : "-rotate-180"
          }`}
        ></img>
      </span>
    </nav>
  );
}

export default NavBar;
