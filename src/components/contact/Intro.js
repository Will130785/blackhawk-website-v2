import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Logo3d from '../../img/logo/logo-trans2.png'

class Intro extends Component {
  render () {
    return (
      <div className='contact-intro'>
        <Container>
          <Row>
            <Col lg>
              <div>
                <img className='contact-intro__pic' src={Logo3d} alt='3d Logo' />
              </div>
              <div>
                <h2>Contact us today</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Intro
