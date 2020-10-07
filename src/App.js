import React from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router} from "react-router-dom";
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
import ServicesPage from "./pages/ServicesPage";
import Footer from "./components/Footer";

const routes = {
  "/": () => <HomePage />,
  "/about": () => <AboutPage />,
  "/services": () => <ServicesPage />,
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
          </main>
          <Footer/>
        </div>
      </Router>
    )
  }

export default App;