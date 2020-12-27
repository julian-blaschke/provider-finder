import React, { useEffect, lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { StepperProvider } from "./context/StepperContext";
import { ThemeProvider } from "./context/ThemeContext";
import "./styles/index.css";

const Home = lazy(() => import("./pages/Home"));
const Results = lazy(() => import("./pages/Results"));

const Usage = lazy(() => import("./pages/stepper/Usage"));
const Devices = lazy(() => import("./pages/stepper/Devices"));
const Budget = lazy(() => import("./pages/stepper/Budget"));

const NavBar = lazy(() => import("./components/Navbar"));

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
          <div className="flex flex-col transition duration-500 min-h-screen bg-gray-100 dark:bg-black">
            <Suspense fallback={<p>loading...</p>}>
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
            </Suspense>
          </div>
        </ThemeProvider>
      </StepperProvider>
    </BrowserRouter>
  );
}

ReactDOM.render(<App></App>, document.getElementById("root"));
