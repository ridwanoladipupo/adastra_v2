import React from "react";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Modal,
  Row,
  Col
} from "reactstrap";

const ContactModal = ({ isOpen, setIsOpen }) => {

    const handleClose = () => {
        setIsOpen(!isOpen)
    }
    return (
      <>
        {/* Modal */}
        <Modal
          className="modal-dialog-centered"
          size="md"
          isOpen={isOpen}
        >
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Contact Us
            </h5>
            <button
              aria-label="Close"
              className="close"
              data-dismiss="modal"
              type="button"
              onClick={handleClose}
            >
              <span aria-hidden={true}>×</span>
            </button>
          </div>
          <div className="modal-body">
            <Form>
                <Row>
                    <Col md="6">
                        <FormGroup>
                            <Input
                                placeholder="Enter your full name"
                                type="text"
                            />
                        </FormGroup>
                    </Col>
                    <Col md="6">
                        <FormGroup>
                            <Input
                                placeholder="Enter your email"
                                type="email"
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Input
                    id="exampleFormControlTextarea1"
                    placeholder="Write your message here ..."
                    rows="5"
                    type="textarea"
                />
                <div className="mt-4">
                    <Button color="danger" type="button" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button color="primary" type="button">
                        Submit
                    </Button>
                </div>
            </Form>
          </div>
          
        </Modal>
      </>
    );

}

export default ContactModal;