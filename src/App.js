import React, {Component} from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {browserHistory} from "react-router";
import {useRoutes} from "hookrouter";

import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import OvenPage from "./pages/OvenPage";
import GeneralPage from "./pages/GeneralPage";
import CommercialPage from "./pages/CommercialPage";
import GalleryPage from "./pages/GalleryPage";
import AreasPage from "./pages/AreasPage";
import FamilyPage from "./pages/FamilyPage";
import PricePage from "./pages/PricePage";
import ContactPage from "./pages/ContactPage";
import CovidPage from "./pages/CovidPage";

const routes = {
  "/": () => <HomePage />,
  "/about": () => <AboutPage />,
  "/oven": () => <OvenPage />,
  "/general": () => <GeneralPage />,
  "/commercial": () => <CommercialPage />,
  "/gallery": () => <GalleryPage />,
  "/areas": () => <AreasPage />,
  "/family": () => <FamilyPage />,
  "/pricing": () => <PricePage />,
  "/contact": () => <ContactPage />,
  "/covid": () => <CovidPage />
}

function App() {

    const match = useRoutes(routes)
    return (
      <Router>
        <div>
          <Navigation />
          <main>
            {match}
            {/* <Route path="/" exact={true} component={HomePage} />
            <Route path="/about" exact={true} component={AboutPage} />
            <Route path="/oven" exact={true} component={OvenPage} />
            <Route path="/general" exact={true} component={GeneralPage} />
            <Route path="/commercial" exact={true} component={CommercialPage} />
            <Route path="/gallery" exact={true} component={GalleryPage} />
            <Route path="/areas" exact={true} component={AreasPage} />
            <Route path="/family" exact={true} component={FamilyPage} />
            <Route path="/pricing" exact={true} component={PricePage} />
            <Route path="/contact" exact={true} component={ContactPage} />
            <Route path="/covid" exact={true} component={CovidPage} /> */}
          </main>
        </div>
      </Router>
    )
  }

export default App;