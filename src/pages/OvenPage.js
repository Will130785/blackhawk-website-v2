import React, {Component} from "react";
import Hero from "../components/Hero";

class OvenPage extends Component {

    render() {
        return (
            <div>
                <Hero 
                    title="Oven Cleaning Services"
                    blurb="Take a look at the oven cleaning services that we offer" 
                />
            </div>
        )
    }
}

export default OvenPage;