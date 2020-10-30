import React, {Component} from "react";

class ContactCard extends Component {

    render() {

        return (
            <div className="contact-card" style={{ width: '100%' }}>
                <h2>Contact Details</h2>
                <h3>Get in contact with us using the form or any of the details below</h3>
                <div class="contact-card__details1">
                    <p>Meadows Walk</p>
                    <p>Walton on the Hill</p>
                    <p>Surrey</p>
                    <p>KT20 7UG</p>
                </div>
                <div className="contact-card__details2">
                    <p>Fairmead</p>
                    <p>Epsom Road</p>
                    <p>Leatherhead</p>
                    <p>KT22 8ST</p>
                    <p>0345 257 8322</p>
                </div>
            </div>
            
        )
    }
}

export default ContactCard;