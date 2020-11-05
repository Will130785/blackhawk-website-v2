import React, {Component} from "react";
import Companies from "../components/family/Companies";
import Intro from "../components/family/Intro";

class FamilyPage extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

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