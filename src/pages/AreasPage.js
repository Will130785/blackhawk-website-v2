import React, {Component} from "react";
import Intro from "../components/areas/Intro";
import Areas from "../components/areas/Areas";

class AreasPage extends Component {

    render() {

        return (
            <div>
                <Intro />
                <Areas />
            </div>
        )
    }
}

export default AreasPage;