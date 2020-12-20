import React from "react";
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
    <div className="h-screen bg-gray-100 dark:bg-gray-900">{children}</div>
  );
}

function App() {
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
