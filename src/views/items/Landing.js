/*!

=========================================================
* Argon Design System React - v1.1.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";

// index page sections
import Download from "../IndexSections/Download.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import TestimonialCarousel from "components/Courosels/TestimonialCourosel.js";
import { motion } from 'framer-motion';

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {

    const textVariants = {
      initial: { opacity: 0, y: 20 },
      in: { opacity: 1, y: 0 },
      out: { opacity: 0, y: 20 },
    };

    const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

    const itemVariants = {
      hidden: { opacity: 0, y: 10 },
      visible
    };
    
    return (
      <>
        <DemoNavbar />
        <motion.div 
          ref="main"
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, transition: { duration: 1 } }}
          variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
          >
          <motion.div className="position-relative" variants={textVariants}>
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-aaf">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex mt-4">
                <motion.div className="col px-0 mt-5 justify-content-center text-center" >
                  <Row className="align-items-center justify-content-center">
                    <Col className="text-center" lg="6">
                        <motion.div className="" variants={textVariants}>
                          <motion.img
                            alt="..."
                            className="img-fluid"
                            src={require("assets/img/brand/ad.png")}
                            style={{ width: "100px" }}
                            variants={{
                              hidden: { opacity: 0, y: -20 },
                              visible}}
                          />
                          <motion.p className="lead text-white" 
                             variants={{
                              hidden: { opacity: 0, y: -20 },
                              visible}}
                          >
                            The Ad Astra Foundation is helping women, immigrants, 
                            and minorities on their path to success and together, 
                            helping humanity thrive.
                          </motion.p>
                      </motion.div>
                    </Col>
                  </Row>
                </motion.div>
              </Container>
              {/* SVG separator */}
              <motion.div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </motion.div>
            </section>
            {/* 1st Hero Variation */}
          </motion.div>
          <section className="section aaf-goal">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                    <motion.div variants={itemVariants}>
                      <Card className="card-lift--hover shadow border-0">
                          <CardBody className="py-5">
                            <motion.div className="icon icon-shape icon-shape-primary rounded-circle mb-4" variants={itemVariants}>
                              <i className="ni ni-check-bold" />
                            </motion.div>
                            <motion.h6 className="text-primary text-uppercase" variants={itemVariants}>
                              Our Objectives
                            </motion.h6>
                            <motion.p className="description mt-3 py-3" variants={itemVariants}>
                              We champion the best future for all women, immigrants, and minorities. 
                              From unfamiliar to unstoppable!
                            </motion.p>
                          </CardBody>
                        </Card>
                    </motion.div>
                    </Col>
                    <Col lg="4">
                      <motion.div variants={itemVariants}>
                        <Card className="card-lift--hover shadow border-0">
                          <CardBody className="py-5">
                            <motion.div className="icon icon-shape icon-shape-success rounded-circle mb-4" variants={itemVariants}>
                              <i className="ni ni-glasses-2" />
                            </motion.div>
                            <motion.h6 className="text-success text-uppercase" variants={itemVariants}>
                              Our Vision
                            </motion.h6>
                            <motion.p className="description mt-3 py-1" variants={itemVariants}>
                            Ad Astra inspires women, immigrants, and minorities, 
                            accelerate their transition to productivity and success in every facet of life and together help humanity thrive.
                            </motion.p>
                          </CardBody>
                        </Card>
                      </motion.div>
                     
                    </Col>
                    <Col lg="4">
                      <motion.div variants={itemVariants}>
                        <Card className="card-lift--hover shadow border-0">
                          <CardBody className="py-5">
                            <motion.div className="icon icon-shape icon-shape-warning rounded-circle mb-4" variants={itemVariants}>
                              <i className="ni ni-notification-70" />
                            </motion.div>
                            <motion.h6 className="text-warning text-uppercase" variants={itemVariants}>
                              Core Values
                            </motion.h6>
                            <motion.p className="description mt-3 py-3" variants={itemVariants}>
                            Integrity with Trust <br/>
                            Dignity with Confidence <br/>
                            Growth and Diversity with Responsibility
                            </motion.p>
                          </CardBody>
                        </Card>
                      </motion.div>
                     
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={require("assets/img/theme/promo-2.png")}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <motion.div className="pr-md-5" variants={textVariants}>
                    <motion.div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5" variants={itemVariants}>
                      <i className="ni ni-spaceship" />
                    </motion.div>
                    <motion.h3 variants={itemVariants}>Our Mission</motion.h3>
                    <ul className="list-unstyled mt-2">
                      <li className="py-2">
                        <motion.div className="d-flex align-items-center" variants={textVariants}>
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-check-bold" />
                            </Badge>
                          </div>
                          <div>
                            <motion.h6 className="mb-0">
                            To contribute to the enrichment and progress of society by providing mentorship and guidance to women, immigrants and minorities in Technology, Sciences and Engineering.
                            </motion.h6>
                          </div>
                        </motion.div>
                      </li>
                      <li className="py-2">
                        <motion.div className="d-flex align-items-center" variants={textVariants}>
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-check-bold" />
                            </Badge>
                          </div>
                          <div>
                            <motion.h6 className="mb-0" >To offer tools and guidance so women, immigrants and minorities can succeed professionally in the corporate world or in small businesses.</motion.h6>
                          </div>
                        </motion.div>
                      </li>
                      <li className="py-2">
                        <motion.div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-check-bold" />
                            </Badge>
                          </div>
                          <div>
                            <motion.h6 className="mb-0" >
                            To empower women, immigrants and minorities to success and prosperity so they in turn as professionals give back and bring change to the world.
                            </motion.h6>
                          </div>
                        </motion.div>
                      </li>
                      <li className="py-2">
                        <motion.div className="d-flex align-items-center" variants={textVariants}>
                          <motion.div variants={textVariants}>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-check-bold" />
                            </Badge>
                          </motion.div>
                          <motion.div>
                            <motion.h6 className="mb-0" >
                            To strive without reserve and foster good citizenship through our core values.
                            </motion.h6>
                          </motion.div>
                        </motion.div>
                      </li>
                    </ul>
                  </motion.div>
                </Col>
              </Row>
            </Container>
          </section>
          <TestimonialCarousel/>
          <Download />
          <section className="section">
            <img alt="..."
              className="img-fluid floating"
              src={require("assets/img/brand/AAF_global-1.png")}/>
          </section>
        </motion.div>
        <SimpleFooter />
      </>
    );
  }
}

export default Landing;
