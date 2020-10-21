import React, {Component} from "react";
import Button from "react-bootstrap/Button";
import {A} from "hookrouter";

class SiteButton extends Component {

    render() {
        return (
            <A href={this.props.location}>
                <Button className="site-button">{this.props.content}</Button>
            </A>
        )
    }
}

export default SiteButton;