import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import familyPic from '../../img/home/family.jpeg'

class OvenPrice extends Component {
  render () {
    return (
      <div className='oven-price'>
        <Container>
          <div className='price__heading'>
            <h2>General Oven Cleaning Prices</h2>
          </div>
          <Row>
            <Col lg>
              <div className='priceCard'>
                <ul className='priceCard__items'>
                  <li>Standard Single Oven 60cm - £50</li>
                  <li>Double Oven (Small door top, Large door bottom) - £60</li>
                  <li>90cm Wide Oven - £60</li>
                  <li>2 Range oven - £85</li>
                  <li>3 Range oven - £95</li>
                  <li>4 Range oven - £105</li>
                </ul>
              </div>
            </Col>
            <Col lg>
              <div className='priceCard'>
                <ul className='priceCard__items'>
                  <li>Oven Trays - £4 per tray</li>
                  <li>4 Ring Hob - £20</li>
                  <li>6 Ring Hob -  £22.50</li>
                  <li>8 Ring Hob - £25</li>
                </ul>
              </div>
            </Col>
            <Col lg>
              <div className='priceCard'>
                <ul className='priceCard__items'>
                  <li>Halogen Hobs £15</li>
                  <li>Small Extractor ( including replacement filter) - £20</li>
                  <li>Large Extractor (including replacement filter) - £25</li>
                  <li>Microwaves standard £20-£25</li>
                </ul>
              </div>
            </Col>
          </Row>
          {/* <div className='package__heading'>
            <h2>Oven Cleaning Packages</h2>
          </div> */}
          {/* <Row>
            <Col>
              <div>
                <img className='package__pic' src={familyPic} alt='Family pic' />
              </div>
            </Col>
            <Col lg>
              <div className='priceCard-div'>
                <h2>Aaliyah14</h2>
                <p>Save £10 by taking advantage of this package</p>
                <ul className='priceCard__items'>
                  <li>Single Oven, Hob ( 4 ring gas ) and Small extractor - £65</li>
                  <li>Additional Rings - £1.50 each</li>
                  <li>Large Extractor - £5 extra</li>
                </ul>
              </div>
            </Col>
            <Col lg>
              <div className='priceCard-div'>
                <h2>Yasmin17</h2>
                <p>Save £10 by taking advantage of this package</p>
                <ul className='priceCard__items'>
                  <li>Double Oven, Hob ( 4 ring gas ) and small extractor - £75</li>
                  <li>Additional Rings - £1.50 each</li>
                  <li>Large Extractor - £5 extra</li>
                </ul>
              </div>
            </Col>
          </Row> */}
        </Container>
      </div>
    )
  }
}

export default OvenPrice
