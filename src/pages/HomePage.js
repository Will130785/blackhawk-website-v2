import React, {Component} from "react";

import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Reputation from "../components/home/Reputation";

class HomePage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

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