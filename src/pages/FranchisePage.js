import React, {Component} from "react";
import Intro from "../components/franchise/Intro";
import Franchise from "../components/franchise/Franchise";

class FranchisePage extends Component {

    render() {

        return (
            <div>
                <Intro />
                <Franchise />
            </div>
        )
    }
}

export default FranchisePage;