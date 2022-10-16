import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

class NavModal extends Component {
  constructor (props) {
    super(props)
    this.state = {
      show: true
    }

    this.handleClose = this.handleClose.bind(this)
    this.handleShow = this.handleShow.bind(this)
  }

  handleClose () {
    this.setState({ show: false })
  };

  handleShow () {
    this.setState({ show: true })
  };

  render () {
    return (
      <>

        <Modal className='modal' show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <h2>We are COVID safe</h2>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>After undertaking extensive research and communicating with my colleagues and clients in our line of business. We can confirm Blackhawk Oven Cleaning are able to continue safely following STRICT COVID -19 government guidelines.</p>
            <ul>
              <li>We will be vigilant with health and hygiene. E.g. Face masks and gloves will be worn.</li>
              <li>We will notify our customers an approximate arrival time when attending the property.</li>
              <li>Once the job is completed we ensure to sanitise our work area.</li>
              <li>Be mindful of small areas and shared access points.</li>
              <li>Customers must maintain a safe distance in another room while we carry out the work.</li>
            </ul>
            <p>Please do not make any appointment if your household is showing symptoms of COVID-19. You MUST inform us immediately within 12 hour notice.</p>
            <p>We appreciate your cooperation from Blackhawk Oven Cleaning.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='primary' className='site-button' onClick={this.handleClose}>
              I confirm that I accept these terms
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}
export default NavModal
