import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Logo1 from '../../img/family/companylogo1.png'
import Logo3 from '../../img/family/companylogo3.png'
import Logo4 from '../../img/family/companylogo4.png'
import Logo5 from '../../img/family/companylogo5.png'
import Logo6 from '../../img/family/companylogo6.png'
import Logo7 from '../../img/family/companylogo7.png'
import Logo8 from '../../img/family/familyimage8.jpeg'

class Companies extends Component {
  render () {
    return (
      <div className='companies'>
        <Container>
          <Row>
            <Col>
              <div>
                <img className='companies__pic' src={Logo1} alt='Logo' />
              </div>
            </Col>
            <Col>
              <div>
                <img className='companies__pic' src={Logo7} alt='Logo' />
              </div>
            </Col>
            <Col>
              <div>
                <img className='companies__pic' src={Logo3} alt='Logo' />
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div>
                <img className='companies__pic' src={Logo4} alt='Logo' />
              </div>
            </Col>
            <Col>
              <div>
                <img className='companies__pic' src={Logo5} alt='Logo' />
              </div>
            </Col>
            <Col>
              <div>
                <img className='companies__pic' src={Logo6} alt='Logo' />
              </div>
            </Col>
          </Row>

          <Row>
            <Col />
            <Col>
              <div>
                <img className='companies__pic' src={Logo8} alt='Logo' />
              </div>
            </Col>
            <Col />
          </Row>
        </Container>
      </div>
    )
  }
}

export default Companies
