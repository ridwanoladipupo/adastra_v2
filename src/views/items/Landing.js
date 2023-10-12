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
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import TestimonialCarousel from "components/Courosels/TestimonialCourosel.js";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
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
                <div className="col px-0 mt-5 justify-content-center text-center">
                  <Row className="align-items-center justify-content-center">
                    <Col className="text-center" lg="6">
                        <div className="">
                        <img
                          alt="..."
                          className="img-fluid"
                          src={require("assets/img/brand/ad.png")}
                          style={{ width: "100px" }}
                        />
                        <p className="lead text-white">
                          The Ad Astra Foundation is helping women, immigrants, 
                          and minorities on their path to success and together, 
                          helping humanity thrive.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
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
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section ">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            Our Objectives
                          </h6>
                          <p className="description mt-3">
                            We champion the best future for all women, immigrants, and minorities. 
                            From unfamiliar to unstoppable!
                          </p>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-glasses-2" />
                          </div>
                          <h6 className="text-success text-uppercase">
                            Our Vision
                          </h6>
                          <p className="description mt-3">
                          Ad Astra inspires women, immigrants, and minorities, 
                          accelerate their transition to productivity and success in every facet of life and together help humanity thrive.
                          </p>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-notification-70" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            Core Values
                          </h6>
                          <p className="description mt-3">
                          Integrity with Trust <br/>
                          Dignity with Confidence <br/>
                          Growth and Diversity with Responsibility
                          </p>
                        </CardBody>
                      </Card>
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
                    src={require("assets/img/theme/promo-1.png")}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                      <i className="ni ni-spaceship" />
                    </div>
                    <h3>Our Mission</h3>
                    <ul className="list-unstyled mt-2">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-check-bold" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                            To contribute to the enrichment and progress of society by providing mentorship and guidance to women, immigrants and minorities in Technology, Sciences and Engineering.
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-check-bold" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">To offer tools and guidance so women, immigrants and minorities can succeed professionally in the corporate world or in small businesses.</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-check-bold" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                            To empower women, immigrants and minorities to success and prosperity so they in turn as professionals give back and bring change to the world.
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-check-bold" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                            To strive without reserve and foster good citizenship through our core values.
                            </h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <TestimonialCarousel/>
          <Download />
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Landing;
