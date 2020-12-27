import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useStepperContext } from "../context/StepperContext";

const steps = ["usage", "devices", "budget"];

function Preferences() {
  const [isOpen, setIsOpen] = useState(false);
  const { values } = useStepperContext();
  const { push } = useHistory();

  //on page load close preferences menu, that may had been left opened from previous visits
  useEffect(() => setIsOpen(false), []);

  return (
    <div className="transition duration-300 w-full bg-gray-900 text-gray-100 rounded-b sticky top-0 z-40 dark:bg-gray-100 dark:text-gray-900">
      <div
        className="p-2 h-12 flex flex-row justify-between items-center cursor-pointer"
        onClick={() => setIsOpen((o) => !o)}
      >
        <span className="font-semibold">Preferences</span>
        <span className={`transition transform ${isOpen ? "rotate-180" : ""}`}>
          <svg
            className="stroke-current"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 9L12 15L18 9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
      <div className={`px-2 pb-2 ${isOpen ? "block" : "hidden"}`}>
        <div className="grid space-y-2 my-3">
          {steps.map((step) => (
            <div
              key={step}
              className="flex flex-row justify-between items-center cursor-pointer"
              onClick={() => push(`/${step}`)}
            >
              <span className="text-sm font-semibold">
                {(() => {
                  if (step === "usage") return `${values[step]}`;
                  if (step === "devices") return `${values[step]} Devices`;
                  if (step === "budget") return `€ ${values[step]} / month`;
                })()}
              </span>
              <div className="flex flex-row items-center">
                <span className="mr-6 text-xs font-light text-gray-300">
                  {step}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="2"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
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
