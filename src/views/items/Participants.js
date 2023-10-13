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

const items = [
    {
      id: "1",
      name: "Mabel Agyare",
      image: require("assets/img/participants/Mabel.jpg"),
      linkedin: 'https://www.linkedin.com/in/mabel-agyare/',
    },
    {
      id: '2',
      name: "Christopher Anamalia",
      image: require("assets/img/participants/Christopher.jpg"),
      linkedin: 'https://www.linkedin.com/in/christopher-anamalia-45a3b2124/',
    },
    {
      id: "3",
      name: "Denver Chikokonya",
      image: require("assets/img/participants/Denver.jpg"),
      linkedin: 'https://www.linkedin.com/in/denver-chikokonya/',
    },
    {
      id: "4",
      name: "Salah Elbakri",
      image: require("assets/img/participants/Salah.jpg"),
      linkedin: 'https://www.linkedin.com/in/salah-elbakri-0a599b120/',
    },
    {
      id: "5",
      name: "Dr. Asad S. Khan",
      image: require("assets/img/participants/Khan.jpg"),
      linkedin: 'https://www.linkedin.com/in/drasadkhan/',
    },
    {
      id: "6",
      name: "Ridwan Oladipupo",
      image: require("assets/img/participants/Ridwan.jpg"),
      linkedin: 'https://www.linkedin.com/in/ridwan-oladipupo-b7b292139/',
    },
    {
      id: "7",
      name: "Christabel Arthur",
      image: require("assets/img/participants/Arthur.jpg"),
      linkedin: 'https://www.linkedin.com/in/christabel-arthur/',
    },
    {
      id: '8',
      name: "Christabel Kuuniffaah",
      image: require("assets/img/participants/Kuuni.jpg"),
      linkedin: 'https://www.linkedin.com/in/christabel-mwinimaala-kuuniffaah/',
    },
    {
      id: "9",
      name: "Munyaradzi Madzoma",
      image: require("assets/img/participants/Munya.jpg"),
      linkedin: 'https://www.linkedin.com/in/mmadzoma/',
    },
    {
      id: '10',
      name: "Daniel Rengifo",
      image: require("assets/img/participants/Daniel.jpg"),
      linkedin: 'https://www.linkedin.com/in/daniel-rengifo-00972020a/',
    },
    {
      id: "11",
      name: "Mustapha Tidoo Yussif",
      image: require("assets/img/participants/Musta.jpg"),
      linkedin: 'https://www.linkedin.com/in/mustapha-tidoo-yussif-96871a146/',
    },
  ];
  

class Participants extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main className="profile-page" ref="main">
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
                  <h2 className="display-3">The Heart of Our Community</h2>
                  <p className="lead text-muted">
                  Explore the vibrant Ad Astra community, a diverse collective of women, immigrants, and minorities driving our mission with unique perspectives, aspirations, and a shared commitment to a brighter future in Technology, Sciences, and Engineering.
                  </p>
                </Col>
              </Row>
              <Row>
                {items.map((item, i) => 
                <Col className="mb-5 mb-lg-0" lg="3" md="6" key={i}>
                    <div className="px-4 mb-4">
                    <img
                        alt="..."
                        className="square-circle img-center img-fluid shadow shadow-lg--hover"
                        src={item.image}
                        style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                        <h6 className="title">
                            <span className="d-block mb-1">{item.name}</span>
                        </h6>
                        <div className="mt-3">
                        <Button
                            className="btn-icon-only rounded-circle"
                            color="primary"
                            href={item.linkedin}
                        >
                            <i className="fa fa-linkedin" />
                        </Button>
                        {/* <Button
                            className="btn-icon-only rounded-circle ml-1"
                            color="primary"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                        >
                            <i className="fa fa-facebook" />
                        </Button>
                        <Button
                            className="btn-icon-only rounded-circle ml-1"
                            color="primary"
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
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Participants;
