import React, {Component} from "react";
import Intro from "../components/contact/Intro";
import Contact from "../components/contact/Contact";

class ContactPage extends Component {

    render() {

        return (
            <div>
                <Intro />
                <Contact />
            </div>
        )
    }
}

export default ContactPage;