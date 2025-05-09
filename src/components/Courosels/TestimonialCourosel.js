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

// reactstrap components
import { Button, Container, Row, Col, UncontrolledCarousel } from "reactstrap";
import { motion } from 'framer-motion';

const items = [
  {
    src: require("assets/img/theme/mabel.png"),
    altText: "",
    caption: "",
    header: "",
  },
  {
    src: require("assets/img/theme/christopher.png"),
    altText: "",
    caption: "",
    header: "",
  },
  {
    src: require("assets/img/theme/christabel.png"),
    altText: "",
    caption: "",
    header: "",
  },
  {
    src: require("assets/img/theme/denver.png"),
    altText: "",
    caption: "",
    header: "",
  },
  {
    src: require("assets/img/theme/salah.png"),
    altText: "",
    caption: "",
    header: "",
  },
  {
    src: require("assets/img/theme/gcu.png"),
    altText: "",
    caption: "",
    header: "",
  },
];

class TestimonialCarousel extends React.Component {
  render() {
    const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

    const itemVariants = {
      hidden: { opacity: 0, y: 10 },
      visible
    };
    return (
      <>
        <section className="section section-shaped">
          <div className="shape shape-style-1 shape-default">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="py-md">
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="5">
                <motion.h1 className="text-white font-weight-light" variants={itemVariants}>
                  Discover Stories of Transformation
                </motion.h1>
                <motion.p className="lead text-white mt-4" variants={itemVariants}>
                Discover inspiring stories of transformation at Ad Astra Foundation, where women, immigrants, and minorities transition from 'unfamiliar' to 'unstoppable.' These testimonials illustrate our mission's impact and the remarkable achievements of those we support.
                </motion.p>
              </Col>
              <Col className="mb-lg-auto" lg="6">
                <div className="rounded shadow-lg overflow-hidden transform-perspective-right">
                  <UncontrolledCarousel items={items} />
                </div>
              </Col>
            </Row>
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
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
      </>
    );
  }
}

export default TestimonialCarousel;
