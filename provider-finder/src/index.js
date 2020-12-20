import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Results from "./pages/Results";
import Stepper from "./pages/Stepper";
import { StepperProvider } from "./context/StepperContext";

function FullW({ children }) {
  return <div className="h-screen">{children}</div>;
}

function App() {
  return (
    <BrowserRouter>
      <StepperProvider>
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
      </StepperProvider>
    </BrowserRouter>
  );
}

ReactDOM.render(<App></App>, document.getElementById("root"));
