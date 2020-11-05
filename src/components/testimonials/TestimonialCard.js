import React, {Component} from "react";

class TestimonialCard extends Component {

    render() {

        return (
            <div className="test-card">
                <p className="test-card__test">{this.props.test}</p>
                <p className="test-card__name">{this.props.name}</p>
            </div>
        )
    }
}

export default TestimonialCard;