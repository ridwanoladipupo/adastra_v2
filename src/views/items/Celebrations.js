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
    src: require("assets/img/celebration/ieee1.png"),
    width: 320,
    height: 212,
    alt: "IEEE HI",
  },
  {
    src: require("assets/img/celebration/ieee2.png"),
    width: 320,
    height: 212,
    alt: "IEEE HI",
  },
  {
    src: require("assets/img/celebration/ieee3.png"),
    width: 320,
    height: 212,
    alt: "IEEE HI",
  },
  
 ]

 const ii = [
  {
    src: require("assets/img/celebration/ii1.png"),
    width: 320,
    height: 212,
    alt: "IEEE HI",
  },
  {
    src: require("assets/img/celebration/ii2.png"),
    width: 320,
    height: 212,
    alt: "IEEE HI",
  },
  {
    src: require("assets/img/celebration/ii3.png"),
    width: 320,
    height: 212,
    alt: "IEEE HI",
  },
  {
    src: require("assets/img/celebration/ii4.png"),
    width: 320,
    height: 212,
    alt: "IEEE HI",
  },
  {
    src: require("assets/img/celebration/ii5.png"),
    width: 320,
    height: 212,
    alt: "IEEE HI",
  },
  
  {
    src: require("assets/img/celebration/ii7.png"),
    width: 320,
    height: 212,
    alt: "IEEE HI",
  },
  {
    src: require("assets/img/celebration/ii6.png"),
    width: 320,
    height: 212,
    alt: "IEEE HI",
  },
  {
    src: require("assets/img/celebration/ii8.png"),
    width: 320,
    height: 212,
    alt: "IEEE HI",
  },
  
 ]

 const ieee09 = [
  {
    src: require("assets/img/celebration/ieee091.png"),
    width: 320,
    height: 212,
    alt: "IEEE HI",
  },
  {
    src: require("assets/img/celebration/ieee092.png"),
    width: 320,
    height: 212,
    alt: "IEEE HI",
  },
  {
    src: require("assets/img/celebration/ieee093.png"),
    width: 320,
    height: 212,
    alt: "IEEE HI",
  },
  {
    src: require("assets/img/celebration/ieee094.png"),
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
              On September 13, 2024, the Institute of Electrical and Electronics Engineers (IEEE) Hawaii Chapter, hosted a webinar given by Dr. Eric Maass, PhD, of Ad Astra Foundation. The topic was  “Using Predictive Engineering For Multiple Response Optimization of An Integrated Circuit”. The session was well received and over 50 participants attended from the various regions of the US. After the session, the representative of the IEEE Hawaii Chapter, Brianne Tengan, suggested that upcoming Ad Astra Foundation’s technical webinars to be hosted on the IEEE.tv.
              </p> 
              <div className="mb-5">
                <p className="text-center"> #ieee #hawaii #empowering #women #engineering</p>
                <Gallery images={ii} />
              </div>

              <p className="mb-3 display-5 text-center">
                 On July 6, 2024, the Institute of Electrical and Electronics Engineers (IEEE), Women In Engineering (WIE) of both Hawaii and Phoenix, hosted a virtual panel discussion on Leadership Skills and Project Management, as part of the celebration for Women in Engineering Day. The theme was “Engaging More Women in AI Technologies”. 
                  The event lasted for one hour. Ad Astra Foundation was invited to participate. Iris Takamatsu, VP and Board Member of Ad Astra Foundation, was one of the panelists along with Heather Monigan and Mary Despe. Heather Morgan is the Director of IP Strategy and Management at Intel, in addition of being an Engineering Professor at Grand Canyon University and the Founder at Kalson Technologies LLC. Mary Despe is Career Coach at University of Hawaii.
                  Some of the topics which were covered were:
                  Leadership skills for successful project management in engineering;
                  Exploring the essential leadership skills necessary for successful project management in engineering;
                  Understanding and applying engineering economics to enhance project outcomes;
                  Mentorship and Inclusion: Building a Supportive Environment for Women and Minorities in STEM;
                  The importance of mentorship in advancing the careers of women, immigrants, and minorities in technology, sciences, and engineering.

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

              <p className="mb-3 display-5 text-center">
                On November 2023, the Institute of Electrical and Electronics Engineers (IEEE) Hawaii Chapter, hosted a webinar given by Dr. Eric Maass, PhD, of Ad Astra Foundation. The topic was “Predictive Engineering Melding engineering modeling with probabilistic approaches”. The session was well received and over 140 participants attended. Ad Astra Foundation received several positive comments. Due to the success of the session, a request was made to have Dr. Eric Maass presents again at a later date and the IEEE Hawaii Chapter would extend an invitation to various Chapters of IEEE in the Western Region. In addition, Ad Astra Foundation was also invited to speak at an IEEE Women in Engineering Hawaii Chapter panel discussion.

                The IEEE Hawaii Section is now an official partner institution of Ad Astra Foundation, and the logo was approved to be included on the Ad Astra Foundation Website.

              </p> 
              <div className="mb-5">
                <p className="text-center"> #ieee #hawaii #empowering #young #professional #engineering</p>
                <Gallery images={ieee09} />
              </div>
            </Container>
          </section>

        {/* <section className="section section-lg">
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
          </section> */}

          
        </motion.div>
        <SimpleFooter />
      </>
    );
  }

export default Celebrations;
