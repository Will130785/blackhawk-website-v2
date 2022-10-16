import React, { Component } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import repPic from '../../img/oven-cleaning/oven1.jpeg'
import { AiFillStar } from 'react-icons/ai'
import Animate from 'animate.css'

class Reputation extends Component {
  render () {
    return (
      <div className='reputation'>
        <Container>
          <Row>
            <Col lg>
              <div className='reputation__heading'>
                <h2>REPUTATION MATTERS</h2>
              </div>
              <div className='reputation__img'>
                <img className='reputation__img--pic' src={repPic} alt='3D Logo' />
              </div>
            </Col>
            <Col lg>
              <div className='reputation__content'>
                <h2>Recommended by</h2>
                <ul style={Animate}>
                  <li><AiFillStar className='star animate__animated animate__flash animate__infinite infinite animate__slower' /> Hollyoaks star Richard Blackwood</li>
                  <li><AiFillStar className='star animate__animated animate__flash animate__infinite infinite animate__slower' /> Love Island 2017 contestant Tyla Carr</li>
                  <li><AiFillStar className='star animate__animated animate__flash animate__infinite infinite animate__slower' /> UK Garage artist Dennis G (sambuca)</li>
                  <li><AiFillStar className='star animate__animated animate__flash animate__infinite infinite animate__slower' /> Author of the book The Lost Boyz Justin Rollins</li>
                  <li><AiFillStar className='star animate__animated animate__flash animate__infinite infinite animate__slower' /> Southampton FC legend Matt Le Tissier</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Reputation
