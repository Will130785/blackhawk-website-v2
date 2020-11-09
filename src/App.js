import React from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import {useRoutes} from "hookrouter";

//Import all pages and components
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import OvenPage from "./pages/OvenPage";
import GeneralPage from "./pages/GeneralPage";
import CommercialPage from "./pages/CommercialPage";
import AreasPage from "./pages/AreasPage";
import FamilyPage from "./pages/FamilyPage";
import FranchisePage from "./pages/FranchisePage";
import ContactPage from "./pages/ContactPage";
import TestimonialPage from "./pages/TestimonialPage";
import Footer from "./components/Footer";

//Create routes for each page
const routes = {
  "/": () => <HomePage />,
  "/oven": () => <OvenPage />,
  "/general": () => <GeneralPage />,
  "/commercial": () => <CommercialPage />,
  "/areas": () => <AreasPage />,
  "/family": () => <FamilyPage />,
  "/franchise": () => <FranchisePage />,
  "/contact": () => <ContactPage />,
  "/testimonial": () => <TestimonialPage />
}

function App() {

    //Save route match to variable
    const match = useRoutes(routes)
    return (
          <div>
            <Navigation />
           <main>
              {match}
           </main>
            <Footer/>
          </div>
    )
  }

export default App;