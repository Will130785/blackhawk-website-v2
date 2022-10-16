import React, { Component } from 'react'
import Award from '../img/home/award-logo.png'

class FamilyLogo extends Component {
  render () {
    return (
      <div className='award-container' style={{ justifyContent: this.props.align }}>
        <img className='award-logo' src={Award} alt='award logo' />
      </div>
    )
  }
}

export default FamilyLogo
