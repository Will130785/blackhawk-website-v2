import React, {Component} from "react";
import Hero from "../components/Hero";

class FamilyPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Hero 
                    title="The Blackhawk Family"
                    blurb="Here are a selection of companies that Blackhawk works with and fully endorses" 
                />
            </div>
        )
    }
}

export default FamilyPage;