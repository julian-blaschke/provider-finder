import { useEffect } from "react";
import { useHistory } from "react-router";
import { useStepperContext } from "../../context/StepperContext";
import logo from "../../img/usage.png";

function Usage() {
  const usages = ["Browsing/Emailing", "Streaming/Consuming Media", "Gaming"];
  const { values, setValues, setStep } = useStepperContext();
  const { push } = useHistory();

  useEffect(() => {
    setStep("usage");
  }, []);

  return (
    <div className="flex flex-col items-center h-full flex-1">
      <div className="h-full flex-1 p-4 flex flex-col max-w-md">
        <div className="flex flex-col flex-grow">
          <h1 className="text-4xl font-semibold text-gray-900 dark:text-gray-100">
            I use my Internet mostly for...
          </h1>
          <p className="mt-2 text-sm font-light text-gray-600 dark:text-gray-400">
            Please select one of the already provided usages, that most
            describes your usage.
          </p>
          <div className="mt-10 py-4">
            <label
              htmlFor="usage"
              className="font-semibold text-gray-900 dark:text-gray-100"
            >
              {values.usage}
            </label>
            <select
              id="usage"
              className="input"
              value={values.usage}
              onChange={(e) =>
                setValues((v) => ({ ...v, usage: e.target.value }))
              }
            >
              {usages.map((u) => (
                <option key={u} label={u}>
                  {u}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full flex flex-col justify-end flex-grow items-center">
            <img src={logo} alt="logo" className="max-h-72"></img>
          </div>
          <button
            type="submit"
            className="button"
            onClick={() => push("/devices")}
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Usage;
