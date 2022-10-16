import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SiteButton from '../SiteButton'
import PriceLogo from '../PriceLogo'
import FamilyLogo from '../FamilyLogo'
import AwardLogo from '../AwardLogo'

class Hero extends Component {
  render () {
    return (

      <Jumbotron className='hero'>
        <Container>
          <Row>
            <Col lg>
              <div className='hero__header'>
                <h2>Welcome to</h2>
                <h1 className='hero__header--main'><span className='black'>BLACK</span><span className='hawk'>HAWK</span></h1>
                <h2>OVEN CLEANING & PROPERTY CARE</h2>
                <p>The future of oven cleaning and property care services! Feel free to get in touch with us for a no-obligation quote.</p>
                <SiteButton location='/contact' content='Free Quote' />
                <div className='hero__header--logos'>
                  <FamilyLogo />
                  <AwardLogo align='center' />
                  <PriceLogo />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Jumbotron>

    )
  }
}

export default Hero
