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
/*eslint-disable*/



import React from "react";
import ReactGA from 'react-ga4';

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";


const Download = () => {

  function handleClickGraphite() {
    // Track a custom event
    ReactGA.event({
      category: 'Button Click',
      action: 'Clicked on Graphite Consulting',
      label: 'Home Page',
    });
  }

  function handleClickStoched() {
    // Track a custom event
    ReactGA.event({
      category: 'Button Click',
      action: 'Clicked on Stoched',
      label: 'Home Page',
    });
  }

  function handleClickIeee() {
    // Track a custom event
    ReactGA.event({
      category: 'Button Click',
      action: 'Clicked on Ieee',
      label: 'Home Page',
    });
  }

  function handleClickGSF() {
    // Track a custom event
    ReactGA.event({
      category: 'Button Click',
      action: 'Clicked on Global Smile Foundation',
      label: 'Home Page',
    });
  }

  function handleClickJ3() {
    // Track a custom event
    ReactGA.event({
      category: 'Button Click',
      action: 'Clicked on J3 Bioscience',
      label: 'Home Page',
    });
  }

  return (
    <>
        <section className="section section-lg">
          <Container>
            <Row className="row-grid justify-content-center">
              <Col className="text-center" lg="8">
                <h2 className="display-3">
                  Our Sponsors & Partners
                </h2>
                <div className="text-center">
                  <Row className="justify-content-center">
                    <Col lg="4" xs="4" onClick={handleClickGraphite}
                    >
                      <a
                        href="https://graphiteconsulting-usa.com/"
                        id="tooltip255035741"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src={require("assets/img/brand/graphite.jpg")}
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip255035741">
                        Graphite Consulting
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="4" xs="4" onClick={handleClickStoched}>
                      <a
                        href="https://stoched.com/welcome"
                        id="tooltip265846671"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src={require("assets/img/brand/stoched.png")}
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip265846671">
                        Stoched
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="4" xs="4" onClick={handleClickIeee}>
                      <a
                        href="https://stoched.com/welcome"
                        id="tooltip265846672"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src={require("assets/img/brand/hawaii.jpg")}
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip265846672">
                        IEEE Hawaii Section
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="4" xs="4" onClick={handleClickGSF}>
                      <a
                        href="https://gsmile.org/"
                        id="tooltip265846673"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src={require("assets/img/brand/gsf.png")}
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip265846673">
                        Global Smile Foundation
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="4" xs="4" onClick={handleClickJ3}>
                      <a
                        href="https://j3bio.com/"
                        id="tooltip26584667"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src={require("assets/img/brand/j3b.jpg")}
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip26584667">
                        J3 Bioscience
                      </UncontrolledTooltip>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </>

  )
}

export default Download

