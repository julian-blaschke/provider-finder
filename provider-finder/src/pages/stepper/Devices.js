import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useStepperContext } from "../../context/StepperContext";
import logo from "../../img/devices.png";
import { devicesSchema } from "../../lib/schema";

function Devices() {
  const { values, setValues, setStep } = useStepperContext();
  const { push } = useHistory();

  const [error, setError] = useState(false);

  const onChange = (e) => {
    const devices = e.target.value;
    setError("");
    devicesSchema
      .validate(devices)
      .then(setValues((v) => ({ ...v, devices: parseInt(e.target.value) })))
      .catch((e) => setError(e));
  };

  useEffect(() => {
    setStep("devices");
  }, []);

  return (
    <div className="flex flex-col items-center h-full flex-1">
      <div className="h-full flex-1 p-4 flex flex-col max-w-md ">
        <h1 className="text-4xl font-semibold text-gray-900 dark:text-gray-100">
          On average I connect...
        </h1>
        <p className="mt-2 text-sm font-light text-gray-600 dark:text-gray-400">
          Please tell us how many devices you connect to your internet on
          average.
        </p>
        <div className="mt-10 py-4">
          <label
            htmlFor="devices"
            className="mb-2 font-semibold text-gray-900 dark:text-gray-100"
          >
            {`${values.devices ? values.devices : ""} device${
              values.devices === 1 ? "" : "s"
            }`}
          </label>
          <input
            required
            type="number"
            step={1}
            min={1}
            max={100}
            className="input"
            value={values.devices}
            onChange={onChange}
          ></input>
          <label className="block mt-2 text-sm font-light text-red-600 dark:text-red-400">
            {error && error.message}
          </label>
        </div>
        <div className="w-full flex flex-col justify-end flex-grow items-center">
          <img src={logo} alt="logo" className="max-h-72"></img>
        </div>
        <button
          type="submit"
          className="button disabled:opacity-50"
          disabled={!!error}
          onClick={() => push("/budget")}
        >
          next
        </button>
      </div>
    </div>
  );
}

export default Devices;
