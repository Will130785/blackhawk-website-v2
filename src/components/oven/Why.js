import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Why extends Component {
  render () {
    return (
      <div className='why'>
        <Container>
          <Row>
            <Col>
              <div className='why__content'>
                <h2>Why use a company to clean your oven?</h2>
                <p>Do you enjoy cleaning your oven? Do you know anybody who finds it a fun chore? Oven cleaning is one of the difficult task that is messy and the most unpleasant kitchen tasks. In addition, the elbow grease needed to undertake the job is a time consuming task. Who wants to spend their free weekend or free time tackling a grubby oven?</p>
                <p>Furthermore, a number of cleaning products available commercially are not effective and contain dreadful noxious fumes. They can be abrasive and often leave a chemical residue on surfaces. This residue poses a health risk when it comes in contact with food. Moreover, some oven cleaning product combined with the wrong cleaning technique can leave surfaces scratched and permanently damaged.</p>
                <p>That is where a professional cleaning company steps in to give a helping hand. We handle this unpleasant and important job so that you do not have to stress. NO MESS NO STRESS! We also offer you a peace of mind knowing your oven is clean, hygienic, free of toxic chemicals and fumes. We are straightforward and use safe quality products.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Why
