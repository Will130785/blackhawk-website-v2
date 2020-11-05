import React, {Component} from "react";
import Intro from "../components/covid/Intro";

class CovidPage extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
                <Intro />
            </div>
        )
    }
}

export default CovidPage;