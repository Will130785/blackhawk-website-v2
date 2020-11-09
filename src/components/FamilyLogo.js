import React, {Component} from "react";
import Family from "../img/home/familyLogo.png";

class FamilyLogo extends Component {

    render() {

        return (
            <div className="family-container" style={{justifyContent: this.props.align}}>
                <img className="family-logo" src={Family} alt="family logo" />
            </div>
        )
    }
}

export default FamilyLogo;