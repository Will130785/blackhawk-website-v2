import React, {Component} from "react";
import Hero from "../components/Hero";

class AreasPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <Hero 
                    title="Areas we cover"
                    blurb="Here is a break down of the areas that we currently cover" 
                />
            </div>
        )
    }
}

export default AreasPage;