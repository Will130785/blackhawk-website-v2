import React, {Component} from "react";
import SiteButtonSmall from "../SiteButtonSmall";


class PriceCard extends Component {

    render() {

        return (
            <div className="price-card">
                <div className="price-card__header">
                    <img className="price-card__image" src={this.props.picture} alt="Property"/>
                </div>
                <div className="price-card__body">
                    <h2>{this.props.description}</h2>
                </div>
                <div className="price-card__footer">
                    <p>{this.props.price}</p>
                    <SiteButtonSmall location="/contact" content="Get quote"/>
                </div>          
            </div>
        )
    }
}

export default PriceCard;