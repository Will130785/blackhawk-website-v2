import React, {Component} from "react";
import Intro from "../components/franchise/Intro";
import Franchise from "../components/franchise/Franchise";

class FranchisePage extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

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