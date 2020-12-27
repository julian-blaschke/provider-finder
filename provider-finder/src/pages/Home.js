import logo from "../img/home.png";
import { useHistory } from "react-router";
import { useStepperContext } from "../context/StepperContext";
import { useMemo } from "react";

function Home() {
  const { push } = useHistory();
  const { step } = useStepperContext();
  const buttonContent = useMemo(
    () => (step ? "finish survey" : "start survey"),
    [step]
  );

  return (
    <div className="flex flex-col items-center h-full flex-1">
      <div className="h-full flex-1 p-4 flex flex-col max-w-md">
        <div className="flex flex-col flex-grow items-center max-w-md">
          <h1 className="text-4xl font-semibold text-gray-900 dark:text-gray-100">
            Welcome to Provider Finder!
          </h1>
          <p className="mt-2 jtext-sm font-light text-gray-600 dark:text-gray-400">
            Find the best Internet Providers for your individual usage.
          </p>
          <div className="w-full flex flex-col justify-end flex-grow items-center ">
            <img src={logo} alt="logo" className="max-h-72"></img>
          </div>
        </div>
        <button
          className="text-base w-full uppercase font-semibold h-12 bg-purple-500 rounded text-gray-100 shadow-lg"
          onClick={() => (step ? push(`/${step}`) : push("/usage"))}
        >
          {buttonContent}
        </button>
      </div>
    </div>
  );
}

export default Home;
