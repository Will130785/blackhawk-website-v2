import React, {Component} from "react";
import Price from "../img/home/price.png";

class PriceLogo extends Component {

    render() {

        return (
            <div className="price-container" style={{justifyContent: this.props.align}}>
                <img className="price" src={Price} alt="price guarantee" />
            </div>
        )
    }
}

export default PriceLogo;