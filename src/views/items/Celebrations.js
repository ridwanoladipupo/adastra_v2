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
import React, {useEffect, useRef} from "react";

// reactstrap components
import { Button, Card, Container, Row, Col } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import { Gallery } from "react-grid-gallery";
import { motion } from 'framer-motion';

const Celebrations = () => {

    const myRef = useRef();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    myRef.current.scrollTop = 0;
  }, [])

  const images = [
    {
        src: require("assets/img/celebration/c_5.jpeg"),
        width: 320,
        height: 174,
        caption: "After Rain (Jeshu John - designerspics.com)",
     },
     {
        src: require("assets/img/celebration/c_10.jpeg"),
        width: 320,
        height: 212,
     },
 ];

 const events = [
  {
    src: require("assets/img/celebration/GCU1.jpg"),
    width: 320,
    height: 212,
    alt: "Boats (Jeshu John - designerspics.com)",
  },
  {
    src: require("assets/img/celebration/GCU2.jpg"),
    width: 320,
    height: 212,
    alt: "Boats (Jeshu John - designerspics.com)",
  },
  {
    src: require("assets/img/celebration/GCU3.jpg"),
    width: 320,
    height: 212,
    alt: "Boats (Jeshu John - designerspics.com)",
  },
  {
    src: require("assets/img/celebration/GCU4.jpg"),
    width: 320,
    height: 212,
    alt: "Boats (Jeshu John - designerspics.com)",
  },
 ]

 const ieee = [
  {
    src: require("assets/img/celebration/IEEEHI01.jpg"),
    width: 320,
    height: 212,
    alt: "IEEE HI",
  },
  {
    src: require("assets/img/celebration/IEEEHI02.jpg"),
    width: 320,
    height: 212,
    alt: "IEEE HI",
  },
  {
    src: require("assets/img/celebration/IEEEHI03.jpg"),
    width: 320,
    height: 212,
    alt: "IEEE HI",
  },
  {
    src: require("assets/img/celebration/IEEEHI04.jpg"),
    width: 320,
    height: 212,
    alt: "IEEE HI",
  },
 ]

    const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

    return (
      <>
        <DemoNavbar />
        <motion.div className="profile-page" ref={myRef}
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
                  <motion.h2 className="display-3" 
                        variants={{
                        hidden: { opacity: 0, y: -20 },
                        visible}}
                    >Empowering Through Gatherings
                    </motion.h2>
                    <motion.p className="lead text-muted" 
                        variants={{
                        hidden: { opacity: 0, y: -20 },
                        visible}}
                    >
                  Join our mission in the Events section, where our community unites for networking, skill-building, and inspiration. Discover diverse events, from workshops to conferences, fostering growth and success in Technology, Sciences, and Engineering.
                  </motion.p>
                </Col>
              </Row>

              <p className="mb-3 display-5 text-center">
              On July 5, 2024, Ad Astra Foundation was invited by the IEEE WIE Phoenix and Hawaii affinity groups to be on a virtual panel addressing Project Management and Career Advancement. The event was  filled with inspiring insights and practical advice for women in engineering. The panel included Heather Monigan, MBA, Iris Takamatsu, and Mary Despe, and was moderated by Quynh Tran. Heather Monigan shared essential project management skills and highlighted their importance in engineering, regardless of one's role. Iris Takamatsu, VP of Ad Astra Foundation, emphasized the benefits of creating an inclusive workforce for business success. 
              Mary Despe discussed navigating career growth and overcoming job search challenges. Each panelist also shared their personal experiences of overcoming obstacles in their career development and project management
              </p>
              <div className="mb-5">
                <p className="text-center"> #ieee #hawaii #empowering #women #engineering</p>
                <Gallery images={ieee} />
              </div>

              <p className="mt-5 display-5 text-center">
                On March 2,2024 Ad Astra Foundation spent a fantastic morning with the Grand Canyon
                University (GCU) SWE group. The morning started with Eric Maass offering his “Predictive
                Engineering Seminar”. After the seminar, a questions-and-answers session took place then
                followed by 1-1 discussions, networking and planning for future collaboration!

                The officers of Ad Astra Foundation would like express thier gratitude to the SWE group at GCU
                and we are looking forward to the next gathering!
              </p>
              <p className="text-center"> #engineering #SWE #STEM #mentoring</p>
              <Gallery images={events} />
            </Container>
          </section>

        <section className="section section-lg">
            <Container>
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <motion.h2 className="display-3" 
                        variants={{
                        hidden: { opacity: 0, y: -20 },
                        visible}}
                    >A Glance into Our Vibrant Celebrations
                    </motion.h2>
                    <motion.p className="lead text-muted" 
                        variants={{
                        hidden: { opacity: 0, y: -20 },
                        visible}}
                    >
                    Explore the gallery below and immerse yourself in the energy of our recent celebration. Join us on this journey of empowerment, where every event is a step towards a brighter, more inclusive future!
                  </motion.p>

                  <div className="mt-5">
                    <Gallery images={images} />
                  </div>
                  
                </Col>
              </Row>
            
            </Container>
          </section>

          
        </motion.div>
        <SimpleFooter />
      </>
    );
  }

export default Celebrations;
