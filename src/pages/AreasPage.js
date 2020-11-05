import React, {Component} from "react";
import Intro from "../components/areas/Intro";
import Areas from "../components/areas/Areas";

class AreasPage extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

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