import { createContext, useContext, useEffect, useState } from "react";

const stepperContext = createContext(null);

export const useStepperContext = () => useContext(stepperContext);

export function StepperProvider({ children }) {
  const [step, setStep] = useState(() => {
    if (window.localStorage.getItem("step")) {
      return parseInt(window.localStorage.getItem("step"));
    }
    return 0;
  });
  const [values, setValues] = useState(() => {
    if (window.localStorage.getItem("values")) {
      return JSON.parse(window.localStorage.getItem("values"));
    }
    return {
      usage: "Browsing/Emailing",
      devices: 4,
      price: 10,
    };
  });

  useEffect(() => {
    window.localStorage.setItem("values", JSON.stringify(values));
  }, [values]);

  useEffect(() => {
    window.localStorage.setItem("step", 0);
    window.localStorage.setItem("step", step);
  }, [step]);

  return (
    <stepperContext.Provider value={{ values, setValues, step, setStep }}>
      {children}
    </stepperContext.Provider>
  );
}
