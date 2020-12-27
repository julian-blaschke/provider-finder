import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { StepperProvider } from "./context/StepperContext";
import { ThemeProvider } from "./context/ThemeContext";
import "./styles/index.css";
import Home from "./pages/Home";
import Results from "./pages/Results";
import Usage from "./pages/stepper/Usage";
import NavBar from "./components/Navbar";
import Devices from "./pages/stepper/Devices";
import Budget from "./pages/stepper/Budget";

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
          <div className="flex flex-col transition duration-500 min-h-screen bg-gray-100 dark:bg-gray-900">
            <NavBar></NavBar>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route exact path="/usage">
                <Usage></Usage>
              </Route>
              <Route exact path="/devices">
                <Devices></Devices>
              </Route>
              <Route exact path="/budget">
                <Budget></Budget>
              </Route>
              <Route exact path="/results">
                <Results></Results>
              </Route>
            </Switch>
          </div>
        </ThemeProvider>
      </StepperProvider>
    </BrowserRouter>
  );
}

ReactDOM.render(<App></App>, document.getElementById("root"));
