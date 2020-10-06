import React, {Component} from "react";

import Hero from "../components/Hero";

class HomePage extends Component {

    render() {
        return (
            <div>
                <Hero 
                    title="Blackhawk Oven Cleaning & Property Services"
                    blurb="Welcome to our website, please take a moment to look around and check out our services" 
                />
                <button>See More</button>
            </div>
        )
    }
}

export default HomePage;