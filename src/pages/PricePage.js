import React, {Component} from "react";
import Hero from "../components/Hero";

class PricePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Hero 
                    title="Pricing"
                    blurb="Check out our prices and packages to suit everybodies needs" 
                />
            </div>
        )
    }
}

export default PricePage;