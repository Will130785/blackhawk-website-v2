import React, {Component} from "react";
import Intro from "../components/testimonials/Intro";
import Testimonial from "../components/testimonials/Testimonial";


class TestimonialPage extends Component {

    //Ensure page is scrolled to the top when component is rendered
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
                <Intro />
                <Testimonial />
            </div>
        )
    }
}

export default TestimonialPage;