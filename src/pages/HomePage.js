import React, {Component} from "react";

import Hero from "../components/Hero";
import About from "../components/home/About";
import Reputation from "../components/home/Reputation";
import Why from "../components/home/Why";
import Family from "../components/home/Family";
import What from "../components/home/What";
import Franchise from "../components/home/Franchise";

class HomePage extends Component {

    render() {
        return (
            <div>
                <Hero />
                <About />
                <Reputation />
                <Why />
                <What />
                <Family />
                <Franchise />
            </div>
        )
    }
}

export default HomePage;