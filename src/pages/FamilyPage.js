import React, {Component} from "react";
import Hero from "../components/Hero";
import Companies from "../components/family/Companies";

class FamilyPage extends Component {

    render() {
        return (
            <div>
                <Hero 
                    title="The Blackhawk Family"
                    blurb={<div><p>Here are a selection of companies that we are proud to consider part of the Blackhawk family and highly recommend to all of our customers</p><p>We have built a strong relationship over many years with all of these companies. If you would like any more details about any of our associated business's, please do get in contact.</p></div>} 
                />
                <Companies />
            </div>
        )
    }
}

export default FamilyPage;