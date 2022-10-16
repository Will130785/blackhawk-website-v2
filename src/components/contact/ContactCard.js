import React, { Component } from 'react'

class ContactCard extends Component {
  render () {
    return (
      <div className='contact-card' style={{ width: '100%' }}>
        <h2>Contact Details</h2>
        <h3>Please feel free to contact us via email or the form below.</h3>
        <div class='contact-card__details1'>
          <p>Blackhawk Oven Cleaning & Property Care</p>
          <p>Sunnyhurst Close</p>
          <p>Sutton</p>
          <p>Surrey</p>
          <p>SM1 2PT</p>
        </div>
        <div class='contact-card__details1'>
          <p>Meadows Walk</p>
          <p>Walton on the Hill</p>
          <p>Surrey</p>
          <p>KT20 7UG</p>
        </div>
        <div className='contact-card__details2'>
          <p>Fairmead</p>
          <p>Epsom Road</p>
          <p>Leatherhead</p>
          <p>KT22 8ST</p>
          <p>0345 257 8322</p>
          <p>enquiries@blackhawkovencleaning.co.uk</p>
        </div>
      </div>

    )
  }
}

export default ContactCard
