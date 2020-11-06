import React, {Component} from "react";
import {browserHistory} from "react-router";
import Intro from "../components/oven/Intro";
import Why from "../components/oven/Why";
import What from "../components/oven/What";
import OvenPrice from "../components/oven/OvenPrice";

class OvenPage extends Component {

    constructor(props) {
        super(props);
        this.onUnload = this.onUnload.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    componentDidMount() {
        window.addEventListener('onbeforeunload', this.onUnload);
     }
 
     componentWillUnmount() {
         window.removeEventListener('onbeforeunload', this.onUnload);
     }
 
     onUnload() {
         browserHistory.push('/');
     }


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