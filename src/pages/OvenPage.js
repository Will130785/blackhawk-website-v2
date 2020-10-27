import React, {Component} from "react";
// import Hero from "../components/Hero";
// import Service from "../components/services/Service";
// import Oven1 from "../img/oven-cleaning/oven1.jpeg";
// import Oven2 from "../img/oven-cleaning/oven2.jpeg";
import Intro from "../components/oven/Intro";
import Why from "../components/oven/Why";
import What from "../components/oven/What";
import OvenPrice from "../components/oven/OvenPrice";
import Training from "../components/oven/Training";

class OvenPage extends Component {

    render() {
        return (
            <div>
                <Intro />
                <Why />
                <What />
                <OvenPrice />
                <Training />
            </div>
        )
    }
}

export default OvenPage;