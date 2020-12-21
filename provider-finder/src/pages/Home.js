import NavBar from "../components/Navbar";
import logo from "../img/home.png";
import { useHistory } from "react-router";
import { useStepperContext } from "../context/StepperContext";

function Home() {
  const { push } = useHistory();
  const { step } = useStepperContext();
  return (
    <div
      className="flex flex-col h-full"
      style={{
        backgroundImage: `url(${logo})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right bottom",
      }}
    >
      <NavBar></NavBar>
      <div className="h-full p-4 flex flex-col">
        <div className="flex flex-col flex-grow md:justify-center items-center max-w-md">
          <h1 className="text-4xl font-semibold text-gray-900 dark:text-gray-100 md:text-center">
            Welcome to Provider Finder!
          </h1>
          <p className="mt-2 jtext-sm font-light text-gray-600">
            Find the best Internet Providers for your individual usage.
          </p>
          <button
            className="mt-10 text-base w-80 uppercase font-semibold h-12 bg-purple-500 rounded text-gray-100 shadow-lg hidden md:block"
            onClick={() => push("/stepper")}
          >
            {step
              ? step === 0
                ? "start survey"
                : "finish survey"
              : "start survey"}
          </button>
          {step && step !== 0 && (
            <p className="hidden md:block mt-2 text-xs font-light text-gray-600">
              Finish where you left off ⛳
            </p>
          )}
        </div>
        <button
          className="text-base w-full uppercase font-semibold h-12 bg-purple-500 rounded text-gray-100 shadow-lg md:hidden"
          onClick={() => push("/stepper")}
        >
          {step
            ? step === 0
              ? "start survey"
              : "finish survey"
            : "start survey"}
        </button>
      </div>
    </div>
  );
}

export default Home;
