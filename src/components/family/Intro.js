import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Logo3d from '../../img/logo/logo-trans2.png'

class Intro extends Component {
  render () {
    return (
      <div className='oven-intro'>
        <Container>
          <Row>
            <Col lg>
              <div>
                <img className='oven-intro__pic' src={Logo3d} alt='3d Logo' />
              </div>
            </Col>
            <Col lg>
              <div>
                <h1><span className='oven-intro__oven'>BLACK</span><span className='oven-intro__cleaning'>HAWK</span> <span className='oven-intro__oven'>FAMILY</span></h1>
                <h2>These are companies that we are proud to consider part of the Blackhawk family and highly recommend</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Intro
