import React, {Component} from "react";
import Hero from "../components/Hero";

class GeneralPage extends Component {

    render() {
        return (
            <div>
                <Hero 
                    title="General Cleaning Services"
                    blurb="Take a look at the general cleaning services that we offer" 
                />
            </div>
        )
    }
}

export default GeneralPage;