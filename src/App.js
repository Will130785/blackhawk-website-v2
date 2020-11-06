import React from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
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
import FranchisePage from "./pages/FranchisePage";
import ContactPage from "./pages/ContactPage";
import CovidPage from "./pages/CovidPage";
import TestimonialPage from "./pages/TestimonialPage";
import Footer from "./components/Footer";

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
  "/franchise": () => <FranchisePage />,
  "/contact": () => <ContactPage />,
  "/covid": () => <CovidPage />,
  "/testimonial": () => <TestimonialPage />
}

function App() {

    const match = useRoutes(routes)
    return (
          <div>
            <Navigation />
           <main>
              {match ? match : <HomePage />}
           </main>
            <Footer/>
          </div>
    )
  }

export default App;