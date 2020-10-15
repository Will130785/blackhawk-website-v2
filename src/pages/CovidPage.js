import React, {Component} from "react";
import Hero from "../components/Hero";

class CovidPage extends Component {

    render() {
        return (
            <div>
                <Hero 
                    title="Covid-19"
                    blurb={<div>
                                <p>Goverment guidlines state that we can clean ovens in peoples homes.</p>
                                <p>Please rest assured we will only do this by adhering strictly to the guidelines ensure we keep our customers and ourselves safe</p>
                                <p>All small businesses are being affected at this time and we hope that you will continue to support local businesess, including ours.</p>
                            </div>
                        }
                />
            </div>
        )
    }
}

export default CovidPage;