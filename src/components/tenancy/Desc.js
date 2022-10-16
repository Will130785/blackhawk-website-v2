import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Desc extends Component {
  render () {
    return (
      <div className='desc'>
        <Container>
          <Row className='desc__row'>
            <Col lg>
              <div className='desc__content'>
                <p>Almost every day, we see countless of ads and websites of people and organisation providing various services and products online, everybody is aiming to impress the customer. Although, to win someone’s trust is not such a simple task, is it?. This is why at Blackhawk Oven Cleaning and Property Care we have a separate section explaining why we are the right choice for you!. Here is a list of advantages when you choose us:</p>
                <ul>
                  <li>Every member of our staff is fully trained and qualified with at least five years of experience in the industry.</li>
                  <li>Flexible working hours. There is no need to worry about the day and time. We work on weekends and bank holidays. All you have to do is choose the most convenient day and time for yourself.</li>
                  <li>We provide 48 hours guarantee for our End of Tenancy Cleaning Service, so you can be sure that you only pay for perfect result!​</li>
                  <li> All of our cleaning experts are fully insured.</li>
                  <li>We use only 100% environment-friendly and industry approved detergents and solutions. Absolutely safe for you and your home.</li>
                  <li>We provide really competitive fares. We maintain our website constantly, so just keep an eye out for upcoming offers which will help you save money on household.</li>
                  <li>You may choose to pay after the service, and after you are completely satisfied with it.</li>
                  <li>We have a friendly staff and customer service agents, always understanding your needs. We are always happy to hear from You.</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Desc
