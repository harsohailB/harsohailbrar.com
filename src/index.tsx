import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./index.css";

import Navbar from "./components/Navbar";
import ThemeProvider from "./contexts/ThemeProvider";
import HomePage from "./components/HomePage";
import ExperiencePage from "./components/ExperiencePage";
import SkillsPage from "./components/SkillsPage";
import PortfolioPage from "./components/PortfolioPage";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <div className="mx-32 min-h-screen">
          <Navbar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/experience" component={ExperiencePage} />
            <Route exact path="/skills" component={SkillsPage} />
            <Route exact path="/portfolio" component={PortfolioPage} />
          </Switch>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
