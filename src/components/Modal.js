import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import Covid from "../img/covid/covid.jpg";


  const NavModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}
      <img variant="primary" onClick={handleShow} class="covid" src={Covid} alt="Covid Logo" />

      <Modal className="modal" show={show} onHide={handleClose}>
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
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}
 export default NavModal;
