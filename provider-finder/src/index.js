import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./styles/index.css";
import Home from "./pages/Home";
import Results from "./pages/Results";
import Stepper from "./pages/Stepper";
import { StepperProvider } from "./context/StepperContext";
import { ThemeProvider } from "./context/ThemeContext";

function FullW({ children }) {
  return (
    <div className="transition duration-500 h-screen bg-gray-100 dark:bg-gray-900 max-h-screen">
      {children}
    </div>
  );
}

function App() {
  //full screen on mobile shouldn't overflow
  //credit: https://www.markusantonwolf.com/en/articles/solution-to-the-mobile-viewport-height-issue-with-tailwind-css
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    return window.addEventListener("resize", () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
  });
  return (
    <BrowserRouter>
      <StepperProvider>
        <ThemeProvider>
          <Switch>
            <Route exact path="/">
              <FullW>
                <Home></Home>
              </FullW>
            </Route>
            <Route exact path="/stepper">
              <FullW>
                <Stepper></Stepper>
              </FullW>
            </Route>
            <Route exact path="/results">
              <FullW>
                <Results></Results>
              </FullW>
            </Route>
          </Switch>
        </ThemeProvider>
      </StepperProvider>
    </BrowserRouter>
  );
}

ReactDOM.render(<App></App>, document.getElementById("root"));
