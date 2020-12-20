import { useMemo } from "react";
import { useHistory } from "react-router";
import NavBar from "../components/Navbar";
import { useStepperContext } from "../context/StepperContext";
import usageLogo from "../img/usage.png";
import devicesLogo from "../img/devices.png";
import budgetLogo from "../img/budget.png";

function Usage() {
  const usages = ["Browsing/Emailing", "Streaming/Consuming Media", "Gaming"];
  const { values, setValues } = useStepperContext();

  return (
    <div className="flex flex-col flex-grow">
      <h1 className="text-4xl font-semibold text-gray-900 dark:text-gray-100">
        I use my Internet mostly for...
      </h1>
      <p className="mt-2 text-sm font-light text-gray-600">
        Find the best Internet Providers for your individual usage.
      </p>
      <div className="py-4">
        <label
          htmlFor="usage"
          className="mb-2 font-semibold text-gray-900 dark:text-gray-100"
        >
          {values.usage}
        </label>
        <select
          id="usage"
          className="p-2 w-full h-12 bg-gray-100 rounded"
          onChange={(e) => setValues((v) => ({ ...v, usage: e.target?.value }))}
        >
          {usages.map((u) => (
            <option key={u} label={u} value={u}></option>
          ))}
        </select>
      </div>
    </div>
  );
}

function Devices() {
  const { values, setValues } = useStepperContext();

  return (
    <div className="flex flex-col flex-grow">
      <h1 className="text-4xl font-semibold text-gray-900 dark:text-gray-100">
        On average I connect...
      </h1>
      <p className="mt-2 text-sm font-light text-gray-600">
        Please tell us how many devices you connect to your internet on average.
      </p>
      <div className="py-4">
        <label
          htmlFor="devices"
          className="mb-2 font-semibold text-gray-900 dark:text-gray-100"
        >
          {values.devices} Devices
        </label>
        <input
          required
          type="number"
          min={1}
          max={100}
          className="p-2 w-full h-12 bg-gray-100 rounded"
          value={values.devices}
          onChange={(e) =>
            setValues((v) => ({ ...v, devices: e.target.value }))
          }
        ></input>
      </div>
    </div>
  );
}

function Budget() {
  const { values, setValues } = useStepperContext();

  return (
    <div className="flex flex-col flex-grow">
      <h1 className="text-4xl font-semibold text-gray-900 dark:text-gray-100">
        I can afford at most...
      </h1>
      <p className="mt-2 text-sm font-light text-gray-600">
        Please tell us how much you are willing to spend on your internet.
      </p>
      <div className="py-4">
        <label
          htmlFor="devices"
          className="mb-2 font-semibold text-gray-900 dark:text-gray-100"
        >
          At most € {values.budget} / month
        </label>
        <input
          required
          type="number"
          min={1}
          max={300}
          className="p-2 w-full h-12 bg-gray-100 rounded"
          value={values.budget}
          onChange={(e) => setValues((v) => ({ ...v, budget: e.target.value }))}
        ></input>
      </div>
    </div>
  );
}

function Stepper() {
  const { step, setStep } = useStepperContext();
  const { push } = useHistory();
  const logo = useMemo(() => {
    if (step === 0) return usageLogo;
    if (step === 1) return devicesLogo;
    if (step === 2) return budgetLogo;
  }, [step]);

  return (
    <div
      className="flex flex-col h-screen"
      style={{
        backgroundImage: `url(${logo})`,
        backgroundSize: "auto",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom center",
      }}
    >
      <NavBar></NavBar>
      <div className="p-4">
        <span className="text-gray-600 font-medium"> Step {step + 1} of 3</span>
      </div>
      <div className="p-4 flex flex-col h-full">
        {[<Usage />, <Devices />, <Budget />][step]}
        <button
          className="text-base w-full uppercase font-semibold h-12 bg-purple-500 rounded text-gray-100 shadow-lg"
          onClick={() => {
            if (step === 3 - 1) {
              setStep(0);
              push("/results");
            } else {
              setStep((s) => s + 1);
            }
          }}
        >
          {step === 3 - 1 ? "finish" : "next"}
        </button>
      </div>
    </div>
  );
}

export default Stepper;
