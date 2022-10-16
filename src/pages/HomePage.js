import React, { Component } from 'react'

// Import components
import Hero from '../components/home/Hero'
import About from '../components/home/About'
import Reputation from '../components/home/Reputation'

class HomePage extends Component {
  // Ensure page is scrolled to the top when component is rendered
  componentDidMount () {
    window.scrollTo(0, 0)
  }

  render () {
    return (
      <div>
        <Hero />
        <About />
        <Reputation />
      </div>
    )
  }
}

export default HomePage
