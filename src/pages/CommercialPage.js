import React, { Component } from 'react'
import Intro from '../components/commercial/Intro'
import Video from '../components/commercial/Video'
import Pub from '../components/commercial/Pub'

class CommercialPage extends Component {
  // Ensure page is scrolled to the top when component is rendered
  componentDidMount () {
    window.scrollTo(0, 0)
  }

  render () {
    return (
      <div>
        <Intro />
        <Video />
        <Pub />
      </div>
    )
  }
}

export default CommercialPage
