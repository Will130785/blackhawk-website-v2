import React, {Component} from "react";
import Hero from "../components/Hero";
import Companies from "../components/family/Companies";

class FamilyPage extends Component {

    render() {
        return (
            <div>
                <Hero />
                <Companies />
            </div>
        )
    }
}

export default FamilyPage;