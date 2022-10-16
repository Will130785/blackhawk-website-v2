import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SiteButton from '../SiteButton'
import PriceLogo from '../PriceLogo'

class Intro extends Component {
  render () {
    return (
      <div className='tenancy-intro'>
        <Container>
          <Row>
            <Col lg>
              <div>
                <h2>End of Tenancy Cleaning</h2>
                <p>Read about our cleaning services below and check out our prices</p>
                <SiteButton location='/contact' content='Contact us now' />
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
