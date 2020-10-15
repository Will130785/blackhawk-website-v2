import React, {Component} from "react";
import Hero from "../components/Hero";
import Companies from "../components/family/Companies";

class FamilyPage extends Component {

    render() {
        return (
            <div>
                <Hero 
                    title="The Blackhawk Family"
                    blurb={<div><p>These are companies we work with and highly recommend </p></div>} 
                />
                <Companies />
            </div>
        )
    }
}

export default FamilyPage;