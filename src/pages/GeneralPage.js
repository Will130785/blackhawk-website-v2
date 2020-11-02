import React, {Component} from "react";
import Intro from "../components/tenancy/Intro";
import Desc from "../components/tenancy/Desc";
import Pricing from "../components/tenancy/Pricing";

class GeneralPage extends Component {

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