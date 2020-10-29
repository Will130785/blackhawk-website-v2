import React, {Component} from "react";
import Intro from "../components/oven/Intro";
import Why from "../components/oven/Why";
import What from "../components/oven/What";
import OvenPrice from "../components/oven/OvenPrice";

class OvenPage extends Component {

    render() {
        return (
            <div>
                <Intro />
                <Why />
                <What />
                <OvenPrice />
            </div>
        )
    }
}

export default OvenPage;