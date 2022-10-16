import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PriceLogo from '../PriceLogo'

class Intro extends Component {
  render () {
    return (
      <div className='testimonial-intro'>
        <Container>
          <Row>
            <Col lg>
              <div>
                <h2>Testimonials</h2>
                <p>See what some of our customers have to say about our services</p>
                <PriceLogo />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Intro
