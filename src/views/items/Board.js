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
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';


const items = [
    {
        id: 'eric-board',
        name: "Eric Maass",
        title:
          "Chairman",
        image: require("assets/img/mentors/Eric.jpg"),
        linkedin: 'https://www.linkedin.com/in/eric-maass-9304a3/',
        description: 'Eric Maass retired as Senior Director, Technical Fellow and DFSS Master Black Belt at Medtronic. He was a co-founder of Six Sigma and was the Lead Master Black Belt at Motorola. He has written: Applying DFSS to Software and Hardware Systems, Flawless Launches – Profitable Products, and Supply Chain Modeling and Optimization. Eric has his Bachelor’s degree in Biology, dual Master’s degree in Biomedical and Chemical Engineering, and doctorate in Industrial Engineering. He is also an Adjunct Professor at Arizona State University'
    
      },
    
    {
      id: "iris-board",
      name: "Iris Takamatsu",
      title:
        "Vice Chairman",
      image: require("assets/img/mentors/Iris.jpg"),
      linkedin: 'https://www.linkedin.com/in/iris-takamatsu-a5b34321/',
      description: 'Iris has been a colleague of Abed’s since 2002 when they both worked for Medtronic Inc. in Tempe, Arizona. Iris’s professional Engineering career spans 35 years with experience in the Semiconductor and Medical Device Industries. Her experience started in Manufacturing Operations then transitioned to Product Engineering and Research & Development. She spent seventeen years at Medtronic as a Senior Manufacturing Operations Director and Product Development and Global Test Engineering Director. Prior to Medtronic, Iris worked at Motorola Inc. and On Semiconductor as a Product Director developing technologies and components supporting the Automotive, Communications, Computing, Industrial and Transportation market segments. Recently, Iris collaborated once again with Abed as a Sr. Quality Engineering consultant supporting Medical Device risk management quality system documentation and guidance. Iris holds a Masters and Bachelors in Electrical Engineering from the University of Hawaii at Manoa. She specialized in Electronic Devices and Sensors where she was a teaching assistant and researcher for the Naval Ocean Systems Center. Iris currently resides in Scottsdale, AZ. One of Iris’ proudest achievements was leading the Medtronic Tempe Campus Diversity Council and through her efforts the Medtronic site was awarded the Arizona Diversity Leadership Council Corporate Award. She has a passion for strategic business leadership and talent development. And at this stage in life, Iris is grateful to be able to provide mentoring and guidance to students and young professionals while learning of their personal backgrounds, cultures, and dreams of the future.'
  
    },
    {
        id: "abed-board",
        name: "Abed Mougharbel",
        title:
          "Founder",
        image: require("assets/img/mentors/Abed.jpg"),
        linkedin: 'https://www.linkedin.com/in/abed-mougharbel-4215684/',
        description: ' Abed initiated the founding of Ad Astra Foundation with the help of Iris Takamatsu, Karmen Elsen and Eric Maass. He now assumes the position of President. Abed has a great passion for mentoring young Scientists, Technologists and Engineers, He possesses more than thirty years of industry experience, twenty of which are in medical devices. His experience spans Research and Development, New Product Development, and Operations. He spent seventeen years at Medtronic as a Senior Engineering Manager and a Senior Software Applications Manager where he led various development groups in both hardware and software. Prior to Medtronic, Abed worked at GE Semiconductor and National Semiconductor as an Integrated Circuits and Software engineer. While at Medtronic, Abed co-led the corporate mentorship program along with Iris Takamatsu. The mission of the program was to provide guidance and advice to women and minorities whom were identified to pursue the management track. Abed also helped found an Engineering Consulting company, Graphite Consulting, LLC in 2016 and he joined as the Vice President in 2017. Abed holds a Masters in Electronics and Computer Engineering from the University of Maine, a BSEE from Columbia University and a BA in Mathematics and Physics from Hamilton College. He also performed post graduate work at Rutgers University. Abed currently resides in Phoenix, Arizona. On a personal level, Abed enjoys the outdoors, especially as an avid fisherman. He also enjoys woodworking and music, Classical, Baroque, Jazz, and Blues. He plays the classical guitar and recently started to take lessons playing the bass guitar. He is a strong believer in giving back to the community. He worked with underprivileged children and at-risk youth as a volunteer and a mentor.',
      },
  ];


class Board extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

   
  render() {
    const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

    const itemVariants = {
      hidden: { opacity: 0, y: 10 },
      visible
    };
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
                  <motion.h2 className="display-3" variants={itemVariants}>Leadership at Ad Astra</motion.h2>
                  <motion.p className="lead text-muted" variants={itemVariants}>
                  Meet our committed officers, leading with integrity and passion, driving our mission to empower women, immigrants, and minorities for a brighter future.
                  </motion.p>
                </Col>
              </Row>
              <Row>
                {items.map((item, i) => 
                    <Col className="mb-5 mb-lg-0" lg="4" md="6" key={i}>
                    <div className="px-4">
                    <Link to={`/officers/${item.id}`}>
                        <img
                            alt="..."
                            className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                            src={item.image}
                            style={{ width: "200px" }}
                        />
                    </Link>
                      
                      <div className="pt-4 text-center">
                        <h5 className="title">
                        <span className="d-block mb-1">{item.name}</span>
                          <small className="h6 text-muted">{item.title}</small>
                        </h5>
                        <div className="mt-3">
                            <Button
                                className="btn-icon-only rounded-circle"
                                color="facebook"
                                href={item.linkedin}
                            >
                                <i className="fa fa-linkedin" />
                            </Button>
                          
                          {/* <Button
                            className="btn-icon-only rounded-circle ml-1"
                            color="warning"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fa fa-facebook" />
                          </Button>
                          <Button
                            className="btn-icon-only rounded-circle ml-1"
                            color="warning"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fa fa-dribbble" />
                          </Button> */}
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

export default Board;
