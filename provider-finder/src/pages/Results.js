import { useEffect, lazy, Suspense } from "react";
import { useStepperContext } from "../context/StepperContext";
import { getProviders } from "../lib/data";
import logo from "../img/results.png";
import logo2 from "../img/results2.png";

const Preferences = lazy(() => import("../components/Preferences"));

function Result({ rank, name, usage, budget, devices, link }) {
  return (
    <a href={link} rel="noreferrer" target="_blank">
      <div className="p-2 flex flex-row bg-gray-100 shadow justify-between items-center rounded transition duration-500 ease-in-out transform hover:-translate-y-1 cursor-pointer hover:bg-gray-200">
        <div className="h-full flex flex-row items-center">
          <span className="font-semibold text-lg text-orange">#{rank}</span>
        </div>
        <div className="flex flex-row items-center">
          <div className="ml-4">
            <h2 className="text-sm">{name}</h2>
            <p className="text-xs font-semibold">€ {budget} / month</p>
            <p className="mt-1 text-xs">
              up to {devices} devices, opted for {usage}
            </p>
          </div>
        </div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11"
            stroke="#1A202C"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 3H21V9"
            stroke="#1A202C"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 14L21 3"
            stroke="#1A202C"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </a>
  );
}

function Results() {
  const { values, setStep } = useStepperContext();
  const providers = getProviders({ ...values });

  useEffect(() => setStep(""), [setStep]);

  return (
    <div className="flex flex-col items-center h-full flex-1">
      <Suspense
        fallback={
          <p className="text-center px-4 py-2 font-lg text-gray-900 dark:text-gray-100">
            loading...
          </p>
        }
      >
        <Preferences></Preferences>
      </Suspense>
      <div className="flex flex-col items-center">
        <div>
          <div className="mt-4 p-4 max-w-2xl">
            <img src={logo} alt="logo" className="w-40"></img>
            <h1 className="text-4xl font-semibold text-gray-900 dark:text-gray-100">
              Top picks for you
            </h1>
            <p className="mt-2 jtext-sm font-light text-gray-600 dark:text-gray-400">
              Here are our top 3 picks for you based on your preferences.
            </p>
            <div className="py-4 grid space-y-4">
              {providers.slice(0, 3).map((result, id) => (
                <Result key={id} {...result} rank={id + 1}></Result>
              ))}
            </div>
          </div>
          <div className="mt-4 p-4 max-w-lg">
            <img src={logo2} alt="logo" className="w-40"></img>
            <h2 className="text-4xl font-semibold text-gray-900 dark:text-gray-100">
              You might also like
            </h2>
            <div className="py-4 grid space-y-4">
              {providers?.map((result, id) => (
                <Result key={id} {...result} rank={id + 1}></Result>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Results;
