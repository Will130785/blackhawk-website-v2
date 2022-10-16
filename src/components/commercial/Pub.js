import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PubPic from '../../img/commercial/orlova-maria-oMTlhdFUhdI-unsplash.jpg'

class Pub extends Component {
  render () {
    return (
      <div className='pub'>
        <Container>
          <Row className='pub__row'>
            <Col lg>
              <div className='pub__img'>
                <img className='pub__img--pic' src={PubPic} alt='Pub' />
              </div>
            </Col>
            <Col lg>
              <div className='pub__content'>
                <p>We work with many pubs and restaurants</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Pub
