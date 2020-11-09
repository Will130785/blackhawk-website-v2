import React, {Component} from "react";
import Intro from "../components/contact/Intro";
import Contact from "../components/contact/Contact";

class ContactPage extends Component {

    //Ensure page is scrolled to the top when component is rendered
    componentDidMount() {
        window.scrollTo(0, 0)
    }

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