import { useEffect, useState } from "react";
import { useHistory } from "react-router";

import { useStepperContext } from "../../context/StepperContext";
import { budgetSchema } from "../../lib/schema";
import logo from "../../img/budget.png";

function Budget() {
  const { values, setValues, setStep } = useStepperContext();
  const { push } = useHistory();

  const [error, setError] = useState(false);

  const onChange = async (e) => {
    const budget = e.target.value;
    setValues((v) => ({ ...v, budget: parseInt(budget) }));
    setError("");
    try {
      await budgetSchema.validate(budget);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    setStep("budget");
  }, [setStep]);

  return (
    <div className="flex flex-col items-center h-full flex-1">
      <div className="h-full flex-1 p-4 flex flex-col max-w-md">
        <div className="flex flex-col flex-grow">
          <h1 className="text-4xl font-semibold text-gray-900 dark:text-gray-100">
            I can afford at most...
          </h1>
          <p className="mt-2 text-sm font-light text-gray-600 dark:text-gray-400">
            Please tell us how much you are willing to spend on your internet.
          </p>
          <div className="mt-10 py-4">
            <label
              htmlFor="devices"
              className="mb-2 font-semibold text-gray-900 dark:text-gray-100"
            >
              At most € {values.budget || ""} / month
            </label>
            <input
              required
              type="number"
              step="0.01"
              min="1.0"
              max="300.0"
              className="input"
              value={values.budget}
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
            onClick={() => push("/results")}
          >
            finish
          </button>
        </div>
      </div>
    </div>
  );
}

export default Budget;
