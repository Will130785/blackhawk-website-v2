import React, {Component} from "react";
import Hero from "../components/Hero";

class CommercialPage extends Component {

    render() {
        return (
            <div>
                <Hero 
                    title="Commercial Cleaning Services"
                    blurb="Take a look at the commercial cleaning services that we offer" 
                />
            </div>
        )
    }
}

export default CommercialPage;