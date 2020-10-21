import React, {Component} from "react";

import Hero from "../components/Hero";
import About from "../components/home/About";
import Reputation from "../components/home/Reputation";

class HomePage extends Component {

    render() {
        return (
            <div>
                <Hero />
                <About />
                <Reputation />
            </div>
        )
    }
}

export default HomePage;