import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import aboutPic from '../../img/logo/logo3d.jpeg'

class About extends Component {
  render () {
    return (
      <div className='about'>
        <Container>
          <Row className='about__row'>
            <Col lg>
              <div className='about__content'>
                <h2>About Us</h2>
                <p>Our success and reputation is based on our professionalism and quality of cleaning. Over 10 years of experience we place a lot of importance on our customer service and satisfaction. We ensure all our processes are simple and hassle free to give everyone a peace of mind.</p>
                <p>We provide the highest standard of domestic cleaning services at competitive prices. Our experienced and trained team of professional cleaners have the talent required for the highest level of cleaning.</p>
              </div>
            </Col>
            <Col lg>
              <div className='about__img'>
                <img className='about__img--pic' src={aboutPic} alt='3D Logo' />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default About
