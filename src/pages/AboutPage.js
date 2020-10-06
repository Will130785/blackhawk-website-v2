import React, {Component} from "react";
import Hero from "../components/Hero";

class AboutPage extends Component {

    render() {
        return (
            <div>
                <Hero 
                    title="About Us"
                    blurb="Read on to find out a little bit more about our organisation" 
                />
            </div>
        )
    }
}

export default AboutPage;