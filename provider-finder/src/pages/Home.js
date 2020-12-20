import NavBar from "../components/Navbar";
import logo from "../img/home.png";
import { useHistory } from "react-router";

function Home() {
  const { push } = useHistory();
  return (
    <div
      className="flex flex-col h-full"
      style={{
        backgroundImage: `url(${logo})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
      }}
    >
      <NavBar></NavBar>
      <div className="h-full p-4 flex flex-col">
        <div className="flex flex-col flex-grow">
          <h1 className="text-4xl font-semibold text-gray-900 dark:text-gray-100">
            Welcome to Provider Finder!
          </h1>
          <p className="mt-2 jtext-sm font-light text-gray-600">
            Find the best Internet Providers for your individual usage.
          </p>
        </div>
        <button
          className="text-base w-full uppercase font-semibold h-12 bg-purple-500 rounded text-gray-100 shadow-lg"
          onClick={() => push("/stepper")}
        >
          get started
        </button>
      </div>
    </div>
  );
}

export default Home;
