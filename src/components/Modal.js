import React, {Component} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Covid from "../img/covid/covid.jpg";


  class NavModal extends Component {

    constructor(props) {
      super(props);
      this.state = {
          show: true
      };
      
      this.handleClose = this.handleClose.bind(this);
      this.handleShow = this.handleShow.bind(this);
  }
  
  handleClose (){
      this.setState({ show: false });
  };
  
  handleShow (){
      this.setState({ show: true });
  };
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  render() {

    return (
      <>
        {/* <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button> */}
        <img variant="primary" onClick={this.handleShow} class="covid" src={Covid} alt="Covid Logo" />
  
        <Modal className="modal" show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
              <Modal.Title>
                  <h2>We are COVID safe</h2>
              </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <p>After doing extensive research and speaking with fellow colleagues in our line of business we can  confirm Blackhawk Oven cleaning are able to continue with business with STRICT guidelines.</p>
              <ul>
                  <li>Facemasks and Gloves must be worn</li>
                  <li>We have to notify our customers exact times we will be attending the property</li>
                  <li>We must Sanitise our work area once the work is completed</li>
                  <li>Be mindfull of small areas and shared access points</li>
                  <li>Customers must stay in another room while we carry out the work</li>
              </ul>
              <p>If anyone has tested positive for Covid or showing symptoms they MUST inform us immediately so we can re schedule or make the necessary arrangements.</p>
              <p>Thank you again from everyone at Blackhawk Oven cleaning</p>
          </Modal.Body>
          <Modal.Footer>
            {/* <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button> */}
            <Button variant="primary" className="site-button" onClick={this.handleClose}>
              I confirm that I accept these terms
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
 export default NavModal;
