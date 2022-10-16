import React, { Component } from 'react'
import Intro from '../components/franchise/Intro'
import Franchise from '../components/franchise/Franchise'

class FranchisePage extends Component {
  // Ensure page is scrolled to the top when component is rendered
  componentDidMount () {
    window.scrollTo(0, 0)
  }

  render () {
    return (
      <div>
        <Intro />
        <Franchise />
      </div>
    )
  }
}

export default FranchisePage
