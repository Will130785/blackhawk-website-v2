import React, {Component} from "react";
import Hero from "../components/Hero";

class CovidPage extends Component {
    constructor(props) {
        super(props);
    }

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