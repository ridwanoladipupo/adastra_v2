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

const Celebrations = () => {

    const myRef = useRef();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    myRef.current.scrollTop = 0;
  }, [])

  const images = [
    {
       src: require("assets/img/celebration/c_1.jpeg"),
       width: 550,
       height: 194,
    },
    {
       src: require("assets/img/celebration/c_3.jpeg"),
       width: 320,
       height: 212,
       alt: "Boats (Jeshu John - designerspics.com)",
    },
  
    {
        src: require("assets/img/celebration/c_4.jpeg"),
       width: 320,
       height: 212,
    },
    {
        src: require("assets/img/celebration/c_5.jpeg"),
        width: 320,
        height: 174,
        caption: "After Rain (Jeshu John - designerspics.com)",
     },
     {
        src: require("assets/img/celebration/c_6.jpeg"),
        width: 320,
        height: 212,
        alt: "Boats (Jeshu John - designerspics.com)",
     },
     {
        src: require("assets/img/celebration/c_9.jpg"),
        width: 320,
        height: 212,
        alt: "Boats (Jeshu John - designerspics.com)",
     },
   
     {
        src: require("assets/img/celebration/c_10.jpeg"),
        width: 320,
        height: 212,
     },
     {
        src: require("assets/img/celebration/c_11.jpeg"),
         width: 320,
         height: 174,
         caption: "After Rain (Jeshu John - designerspics.com)",
      },
 ];

    return (
      <>
        <DemoNavbar />
        <main className="profile-page" ref={myRef}>
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
                  <h2 className="display-3">Empowering Through Gatherings</h2>
                  <p className="lead text-muted">
                  Join our mission in the Events section, where our community unites for networking, skill-building, and inspiration. Discover diverse events, from workshops to conferences, fostering growth and success in Technology, Sciences, and Engineering.
                  </p>
                </Col>
              </Row>
              <Gallery images={images} />
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }

export default Celebrations;
