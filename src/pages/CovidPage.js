import React, {Component} from "react";
import Hero from "../components/Hero";

class CovidPage extends Component {

    render() {
        return (
            <div>
                <Hero 
                    title="Covid-19"
                    blurb="We are fully compliant to the current Covid-19 restrictions" 
                />
            </div>
        )
    }
}

export default CovidPage;