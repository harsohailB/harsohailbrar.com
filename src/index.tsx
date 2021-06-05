import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./index.css";

import Navbar from "./components/Navbar";
import ThemeProvider from "./contexts/ThemeProvider";
import HomePage from "./components/HomePage";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <div className="mx-32 min-h-screen">
          <Navbar />
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
