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
import { Button, Container, Row, Col } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import { motion } from 'framer-motion';


const items = [
      {
        id: '1',
        name: "Abed Mougharbel",
        image: require("assets/img/mentors/Abed.jpg"),
        linkedin: 'https://www.linkedin.com/in/abed-mougharbel-4215684/',
      },
      {
        id: "2",
        name: "Eric Maass",
        image: require("assets/img/mentors/Eric.jpg"),
        linkedin: 'https://www.linkedin.com/in/eric-maass-9304a3/',
      },
      {
        id: "3",
        name: "Iris Takamatsu",
        image: require("assets/img/mentors/Iris.jpg"),
        linkedin: 'https://www.linkedin.com/in/iris-takamatsu-a5b34321/',
      },
      {
        id: "4",
        name: "Stacey Morris",
        image: require("assets/img/mentors/Stacey.jpg"),
        linkedin: 'https://www.linkedin.com/in/staceysmorris/',
      },
      // {
      //   id: "5",
      //   name: "Kristin Morris",
      //   image: require("assets/img/mentors/Kristin.jpg"),
      //   linkedin: 'https://www.linkedin.com/in/kristinallenmorris/',
      // },
      {
        id: "6",
        name: "Nandini Srinivasan",
        image: require("assets/img/mentors/Nandini.jpg"),
        linkedin: 'https://www.linkedin.com/in/nandini-srinivasan-630128/',
      },
  ];

  const resources = [
    {
      id: "1",
      name: "Erika Amoako-Agyei",
      image: require("assets/img/mentors/Erika.jpg"),
      linkedin: 'https://www.linkedin.com/in/erika-amoako-agyei-4a68824/',
    },
    {
      id: "2",
      name: "Karin Rudman",
      image: require("assets/img/mentors/Karin.jpg"),
      linkedin: 'https://www.linkedin.com/in/karin-rudman/',
    },
    {
      id: "3",
      name: "Elysar Mougharbel",
      image: require("assets/img/mentors/Elysar.jpg"),
      linkedin: 'https://www.linkedin.com/in/elysar',
    },
];

class Mentors extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
  
      const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };
  
    return (
      <>
        <DemoNavbar />
        <motion.div className="profile-page" ref="main"
        
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 1 } }}
            variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
        >
          <section className="section-profile-cover section-shaped my-0">
            {/* Circles background */}
            <div className="shape shape-style-1 shape-aaf alpha-4">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
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
          

        <section className="section section-lg">
            <Container>
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <motion.h2 
                   variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible}}
                        className="display-3">Guiding Lights: Meet Our Mentors
                    </motion.h2>
                  <motion.p className="lead text-muted"
                  variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible}}>
                  Experts guiding women, immigrants, and minorities in Technology, Sciences, and Engineering, fostering growth, and positive change within our community.
                  </motion.p>
                </Col>
              </Row>
              <Row>
                {items.map((item, i) => 
                <Col className="mb-5 mb-lg-0" lg="3" md="6" key={i}>
                    <div className="px-4 mb-4">
                    <img
                        alt="..."
                        className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                        src={item.image}
                        style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                        <h5 className="title">
                        <span className="d-block mb-1">{item.name}</span>
                        </h5>
                        <div className="mt-2">
                            <Button
                                className="btn-icon-only rounded-circle"
                                color="primary"
                                href={item.linkedin}
                            >
                                <i className="fa fa-linkedin" />
                            </Button>
                        </div>
                    </div>
                    </div>
                </Col>
                )}
              </Row>

              <Row className="justify-content-center text-center mb-lg mt-5">
                <Col lg="8">
                  <motion.h2 
                   variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible}}
                        className="display-3 mt-4">
                        Unlock Expertise: Resources and SME
                    </motion.h2>
                  <motion.p className="lead text-muted"
                  variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible}}>
                      Explore curated resources and connect with subject matter experts dedicated to empowering women, immigrants, and minorities in Technology, Sciences, and Engineering. Access valuable tools and insights for success.
                  </motion.p>
                </Col>
              </Row>

              <Row>
                {resources.map((item, i) => 
                  <Col className="mb-5 mb-lg-0" lg="4" md="4" key={i}>
                      <div className="px-4 mb-4">
                      <img
                          alt="..."
                          className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                          src={item.image}
                          style={{ width: "200px" }}
                      />
                      <div className="pt-4 text-center">
                          <h5 className="title">
                          <span className="d-block mb-1">{item.name}</span>
                          </h5>
                          <div className="mt-2">
                              <Button
                                  className="btn-icon-only rounded-circle"
                                  color="primary"
                                  href={item.linkedin}
                              >
                                  <i className="fa fa-linkedin" />
                              </Button>
                          </div>
                      </div>
                      </div>
                  </Col>
                )}
              </Row>
            </Container>
          </section>
        </motion.div>
        <SimpleFooter />
      </>
    );
  }
}

export default Mentors;
