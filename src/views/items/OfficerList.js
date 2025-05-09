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
import React, { useEffect, useRef } from "react";

// reactstrap components
import { Button, Card, Container, Row, Col } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';

const items = [
    {
        id: "abed",
        name: "Abed Mougharbel",
        title:
          "President/Founder.",
        image: require("assets/img/mentors/Abed.jpg"),
        linkedin: 'https://www.linkedin.com/in/abed-mougharbel-4215684/',
        description: ' Abed initiated the founding of Ad Astra Foundation with the help of Iris Takamatsu, Karmen Elsen and Eric Maass. He now assumes the position of President. Abed has a great passion for mentoring young Scientists, Technologists and Engineers, He possesses more than thirty years of industry experience, twenty of which are in medical devices. His experience spans Research and Development, New Product Development, and Operations. He spent seventeen years at Medtronic as a Senior Engineering Manager and a Senior Software Applications Manager where he led various development groups in both hardware and software. Prior to Medtronic, Abed worked at GE Semiconductor and National Semiconductor as an Integrated Circuits and Software engineer. While at Medtronic, Abed co-led the corporate mentorship program along with Iris Takamatsu. The mission of the program was to provide guidance and advice to women and minorities whom were identified to pursue the management track. Abed also helped found an Engineering Consulting company, Graphite Consulting, LLC in 2016 and he joined as the Vice President in 2017. Abed holds a Masters in Electronics and Computer Engineering from the University of Maine, a BSEE from Columbia University and a BA in Mathematics and Physics from Hamilton College. He also performed post graduate work at Rutgers University. Abed currently resides in Phoenix, Arizona. On a personal level, Abed enjoys the outdoors, especially as an avid fisherman. He also enjoys woodworking and music, Classical, Baroque, Jazz, and Blues. He plays the classical guitar and recently started to take lessons playing the bass guitar. He is a strong believer in giving back to the community. He worked with underprivileged children and at-risk youth as a volunteer and a mentor.',
      },
      {
        id: "iris",
        name: "Iris Takamatsu",
        title:
          "Treasurer",
        image: require("assets/img/mentors/Iris.jpg"),
        linkedin: 'https://www.linkedin.com/in/iris-takamatsu-a5b34321/',
        description: 'Iris has been a colleague of Abed’s since 2002 when they both worked for Medtronic Inc. in Tempe, Arizona. Iris’s professional Engineering career spans 35 years with experience in the Semiconductor and Medical Device Industries. Her experience started in Manufacturing Operations then transitioned to Product Engineering and Research & Development. She spent seventeen years at Medtronic as a Senior Manufacturing Operations Director and Product Development and Global Test Engineering Director. Prior to Medtronic, Iris worked at Motorola Inc. and On Semiconductor as a Product Director developing technologies and components supporting the Automotive, Communications, Computing, Industrial and Transportation market segments. Recently, Iris collaborated once again with Abed as a Sr. Quality Engineering consultant supporting Medical Device risk management quality system documentation and guidance. Iris holds a Masters and Bachelors in Electrical Engineering from the University of Hawaii at Manoa. She specialized in Electronic Devices and Sensors where she was a teaching assistant and researcher for the Naval Ocean Systems Center. Iris currently resides in Scottsdale, AZ. One of Iris’ proudest achievements was leading the Medtronic Tempe Campus Diversity Council and through her efforts the Medtronic site was awarded the Arizona Diversity Leadership Council Corporate Award. She has a passion for strategic business leadership and talent development. And at this stage in life, Iris is grateful to be able to provide mentoring and guidance to students and young professionals while learning of their personal backgrounds, cultures, and dreams of the future.'
    
      },
      {
        id: 'catalina',
        name: "Catalina Stephens",
        title:
          "Secretary",
        image: require("assets/img/mentors/Catalina.jpg"),
        linkedin: 'https://www.linkedin.com/in/catalina-stephens-bb20524/',
        description: 'Catalina Stephens, with over 20 years of experience, excels in building lasting success through authentic and compassionate relationships. Adept in sales, recruiting, and outplacement, she prioritizes customer-centric approaches. Known for her high energy and commitment to excellence, Catalina enjoys meeting new people, brainstorming solutions, and implementing success plans. As a military family supporter, she provides top-tier staffing services. A Filipina-American foodie, Catalina brings vibrancy to every city she visits. For discussions on staffing, business strategies, or a round of golf, Catalina is the enthusiastic and skilled professional to connect with.'
    
      },
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
        id: "abed-board",
        name: "Abed Mougharbel",
        title:
          "Founder",
        image: require("assets/img/mentors/Abed.jpg"),
        linkedin: 'https://www.linkedin.com/in/abed-mougharbel-4215684/',
        description: ' Abed initiated the founding of Ad Astra Foundation with the help of Iris Takamatsu, Karmen Elsen and Eric Maass. He now assumes the position of President. Abed has a great passion for mentoring young Scientists, Technologists and Engineers, He possesses more than thirty years of industry experience, twenty of which are in medical devices. His experience spans Research and Development, New Product Development, and Operations. He spent seventeen years at Medtronic as a Senior Engineering Manager and a Senior Software Applications Manager where he led various development groups in both hardware and software. Prior to Medtronic, Abed worked at GE Semiconductor and National Semiconductor as an Integrated Circuits and Software engineer. While at Medtronic, Abed co-led the corporate mentorship program along with Iris Takamatsu. The mission of the program was to provide guidance and advice to women and minorities whom were identified to pursue the management track. Abed also helped found an Engineering Consulting company, Graphite Consulting, LLC in 2016 and he joined as the Vice President in 2017. Abed holds a Masters in Electronics and Computer Engineering from the University of Maine, a BSEE from Columbia University and a BA in Mathematics and Physics from Hamilton College. He also performed post graduate work at Rutgers University. Abed currently resides in Phoenix, Arizona. On a personal level, Abed enjoys the outdoors, especially as an avid fisherman. He also enjoys woodworking and music, Classical, Baroque, Jazz, and Blues. He plays the classical guitar and recently started to take lessons playing the bass guitar. He is a strong believer in giving back to the community. He worked with underprivileged children and at-risk youth as a volunteer and a mentor.',
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
        id: "peter-board",
        name: "Peter Crichton",
        title:
          "Member",
        image: require("assets/img/mentors/Peter.jpg"),
        linkedin: 'https://www.linkedin.com/in/peter-crichton-3876a313',
        description: 'I have retired after 35 years of active involvement in local government for the Town of Mars Hill as Economic-Community Development Director, Lewiston Public Works Superintendent of Administration, Lewiston Assistant City Administrator, Cumberland County Manager, and Auburn City Manager. I have enjoyed my years of public service. It has been a privilege and honor. I will continue to be involved with the Muskie School and hope to be able to do more on the Muskie School Board of Visitors and MPPM Advisory Committee. I look forward to doing things that are important to me.',
      },
      {
        id: "nandini",
        name: "Nandini Srinivasan",
        title:
          "Secretary",
        image: require("assets/img/mentors/Nandini.jpg"),
        linkedin: 'https://www.linkedin.com/in/nandini-srinivasan-630128/',
        description: 'Nandini was the co-founder and chief operations officer of Cactus Semiconductor, a fabless semiconductor company that provided innovative application specific integrated circuits (ASICs) for its customers. In her role as COO, she oversaw all operations: design/product delivery, systems, employees, certifications, quality, vendor/customer management. She was also responsible for finance/budgets/profitability along with the CEO. Her tenure at Cactus saw the company earn accolades such as a spot on the Inc. 500&#39;s &quot;Fastest Growing Businesses&quot; list in 2008 and 2009 and recognition as one of Chandler, AZ&#39;s 100 anchoring companies in 2008. The successful acquisition of Cactus Semiconductor by Cirtec Medical in 2018 marked a fulfilling closure to her professional journey, leading to her retirement from professional life. Before embarking on her entrepreneurial venture, Nandini&#39;s career was shaped by her roles in product and applications engineering at Motorola, On Semiconductor, and Medtronic, where she honed her expertise in analog IC design. Her academic foundation was laid at the prestigious Indian Institute of Technology, Mumbai, followed by a Master of Science in Electrical Engineering from the University of Hawaii, where she and Iris forged a lasting professional and personal bond. Nandini&#39;s passion for helping women led her to join the board of Arizona Foundation for Women from 2018 to 2020, which is dedicated to creating a state where women are safe, healthy, and economically independent. Her volunteer work with Meemli (a 501c non profit) further underscores her commitment to educational equity and providing students with affordable access to high-quality academic support. With a steadfast belief in the mission of the Ad Astra Foundation, Nandini did not hesitate when Abed and Iris invited her to join. Her lifelong advocacy for women, immigrants and minorities, shaped by her own life experiences, drives her to contribute meaningfully to the foundation&#39;s vision. She has been a resident of Chandler, AZ for 34 years and is a 2015 Flinn-Brown Fellow.'
    
      },
  ];

const OfficerList = () => {
    const myRef = useRef();
    const { id } = useParams();

    useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        myRef.current.scrollTop = 0;
      }, [])

  const selectedProfile = items.find(item => item.id === id);

  const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

    return (
      <>
        <DemoNavbar />
        <motion.div className="profile-page" 
            ref={myRef}
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
          <section className="section">
            <Container>
              <Card className="card-profile shadow mt--500">
                <div className="px-4">
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="3">
                      <motion.div className="card-profile-image"
                        variants={{
                            hidden: { opacity: 0, y: -20 },
                            visible}}
                        >
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={selectedProfile.image}
                            
                          />
                        </a>
                      </motion.div>
                    </Col>
                    <Col
                      className="order-lg-3 text-lg-right align-self-lg-center"
                      lg="4"
                    >
                      <div className="py-4 mt-5" />

                    </Col>
                    <Col className="order-lg-1" lg="4">
                      <div className="py-lg-5" >
                        <Link to={`/officers/`}>
                            <div className="icon icon-shape icon-shape-primary rounded-circle">
                                <i className="ni ni-bold-left" />
                            </div>
                        </Link>
                        
                        </div>
                    </Col>
                  </Row>
                  <div className="text-center mt-2">
                    <motion.h3 
                        variants={{
                            hidden: { opacity: 0, y: -20 },
                            visible}}
                        >
                      {selectedProfile.name}
                    </motion.h3>
                    <motion.div 
                        className="h6 mt-2"
                        variants={{
                            hidden: { opacity: 0, y: -20 },
                            visible}}
                        >
                      <i className="ni business_briefcase-24 mr-2" />
                      {selectedProfile.title}
                    </motion.div>
                    <motion.div 
                        className="mt-3"
                        variants={{
                            hidden: { opacity: 0, y: -20 },
                            visible}}
                        >
                            <Button
                                className="btn-icon-only rounded-circle"
                                color="facebook"
                                href={selectedProfile.linkedin}
                            >
                                <i className="fa fa-linkedin" />
                            </Button>
                        </motion.div>
                  </div>
                  <div className="mt-5 py-5 border-top text-center">
                    <Row className="justify-content-center">
                      <Col lg="9">
                        <motion.p variants={{
                              hidden: { opacity: 0, y: -20 },
                              visible}}
                        >
                           {selectedProfile.description}
                        </motion.p>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Container>
          </section>
        </motion.div>
        <SimpleFooter />
      </>
    );
  }

export default OfficerList;
