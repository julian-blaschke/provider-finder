import { useState } from "react";
import { useHistory } from "react-router";
import { useStepperContext } from "../context/StepperContext";

const steps = ["usage", "devices", "budget"];

function Preferences() {
  const [isOpen, setIsOpen] = useState(false);
  const { values, setStep } = useStepperContext();
  const { push } = useHistory();

  return (
    <div className="w-full bg-purple-500 rounded-b-xl">
      <div className="p-2 flex flex-row justify-between items-center">
        <span className="font-semibold text-gray-100">Preferences</span>
        <svg
          className="cursor-pointer"
          onClick={() => setIsOpen((iO) => !iO)}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="#F7FAFC"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} px-2 pb-2 text-gray-100`}>
        <div className="grid space-y-2 my-3">
          {steps.map((step) => (
            <div className="flex flex-row justify-between items-center">
              <span className="text-sm font-semibold">{values[step]}</span>
              <div className="flex flex-row items-center">
                <span className="mr-6 text-xs font-light text-gray-300">
                  {step}
                </span>
                <svg
                  onClick={() => {
                    setStep(() => {
                      if (step === "usage") return 0;
                      if (step === "devices") return 1;
                      if (step === "budget") return 2;
                    });
                    push("/stepper");
                  }}
                  className="cursor-pointer"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19"
                    stroke="#EDF2F7"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 5L19 12L12 19"
                    stroke="#EDF2F7"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Preferences;
