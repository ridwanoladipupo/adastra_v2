import React, { useState } from "react";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  FormFeedback,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Modal,
  Row,
  Col
} from "reactstrap";
import ReactGA from 'react-ga';


// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from 'axios';
import swal from 'sweetalert';
import { PulseLoader } from 'react-spinners';

const ContactModal = ({ isOpen, setIsOpen }) => {

    const [isLoading, setIsLoading] = useState(false)

    const handleClose = () => {
        setIsOpen(!isOpen)
    }

    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,
    
        initialValues: {
          fullName: '',
          email: '',
          message: '',
        },
        validationSchema: Yup.object({
            fullName: Yup.string().required("Please Enter Your UserName"),
            email: Yup.string().required("Please Enter Your Email").email("Invalid email address"),
            message: Yup.string().required("Please Enter Your Message"),
        }),
        onSubmit: async(values, {resetForm}) => {
            try {
                setIsLoading(true)
                const response = await axios.post('https://getform.io/f/086d1635-d42a-4fe6-a4d4-8cfe86c9b2e9', values);
                console.log('response', response)
                setIsLoading(false)
                swal("Bravo!", "Contact Form Submitted Successfully", "success");
                ReactGA.event({
                    category: 'Button Click',
                    action: 'Submit Contact',
                    label: 'Contact Page',
                  });
                handleClose()

            } catch (error) {
                console.log('Error', error)
                swal("Sorry!", `${error.message}`, "danger");
                setIsLoading(false)
                handleClose()
            }
            resetForm({ values: '' })
      
          },
      });

   
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
                                name="fullName"
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                value={validation.values.fullName || ""}
                                invalid={
                                    validation.touched.fullName && validation.errors.fullName ? true : false
                                }
                            />
                            {validation.touched.fullName && validation.errors.fullName ? (
                                <FormFeedback type="invalid">{validation.errors.fullName}</FormFeedback>
                            ) : null}
                        </FormGroup>
                    </Col>
                    <Col md="6">
                        <FormGroup>
                            <Input
                                placeholder="Enter your email"
                                type="email"
                                name="email"
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                value={validation.values.email || ""}
                                invalid={
                                    validation.touched.email && validation.errors.email ? true : false
                                }
                            />
                            {validation.touched.email && validation.errors.email ? (
                                <FormFeedback type="invalid">{validation.errors.email}</FormFeedback>
                            ) : null}
                        </FormGroup>
                    </Col>
                </Row>
                <Input
                    id="exampleFormControlTextarea1"
                    placeholder="Write your message here ..."
                    rows="5"
                    type="textarea"
                    name="message"
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values.message || ""}
                    invalid={
                        validation.touched.message && validation.errors.message ? true : false
                    }
                />
                {validation.touched.message && validation.errors.message ? (
                        <FormFeedback type="invalid">{validation.errors.message}</FormFeedback>
                    ) : null}
                <div className="mt-4">
                    <Button color="danger" type="button" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button 
                        color="primary" 
                        type="button" 
                        onClick={(e) => {
                            e.preventDefault();
                            validation.handleSubmit();
                            return false;
                        }}>
                        {isLoading ? <PulseLoader color="#fff" size={7} /> : "Submit"}

                    </Button>
                </div>
            </Form>
          </div>
          
        </Modal>
      </>
    );

}

export default ContactModal;