import React, {Component} from "react";
import Hero from "../components/Hero";

class ContactPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Hero 
                    title="Contact us"
                    blurb="Get in contact with us today for a quote" 
                />
            </div>
        )
    }
}

export default ContactPage;