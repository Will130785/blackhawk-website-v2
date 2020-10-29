import React, {Component} from "react";
import Companies from "../components/family/Companies";
import Intro from "../components/family/Intro";

class FamilyPage extends Component {

    render() {
        return (
            <div>
                <Intro />
                <Companies />
            </div>
        )
    }
}

export default FamilyPage;