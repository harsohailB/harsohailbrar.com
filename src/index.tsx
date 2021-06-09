import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./index.css";

import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import ExperiencePage from "./components/ExperiencePage";
import EducationPage from "./components/EducationPage";
import SkillsPage from "./components/SkillsPage";
import PortfolioPage from "./components/PortfolioPage";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="mx-8 md:mx-32 min-h-screen">
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/experience" component={ExperiencePage} />
          <Route exact path="/education" component={EducationPage} />
          <Route exact path="/skills" component={SkillsPage} />
          <Route exact path="/portfolio" component={PortfolioPage} />
        </Switch>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
