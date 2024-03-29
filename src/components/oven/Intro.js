import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import OvenPic1 from '../../img/oven-cleaning/louis-hansel-shotsoflouis-ktVKZRYUP4Y-unsplash.jpg'
import PriceLogo from '../PriceLogo'

class Intro extends Component {
  render () {
    return (
      <div className='intro'>
        <Container>
          <Row>
            <Col lg>
              <div>
                <h1><span className='intro__oven'>OVEN</span> <span className='intro__cleaning'>CLEANING</span></h1>
                <h2>Take a look at our oven cleaning services</h2>
                <PriceLogo align='center' />
              </div>
            </Col>
            <Col lg>
              <div>
                <img className='intro__pic' src={OvenPic1} alt='Oven' />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Intro
