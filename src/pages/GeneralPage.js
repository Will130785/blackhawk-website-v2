import React, {Component} from "react";
import Intro from "../components/tenancy/Intro";
import Desc from "../components/tenancy/Desc";
import Pricing from "../components/tenancy/Pricing";

class GeneralPage extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
                <Intro />
                <Desc />
                <Pricing />
            </div>
        )
    }
}

export default GeneralPage;