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
      id: "5",
      name: "Dr. Asad S. Khan, MD",
      image: require("assets/img/participants/Khan.jpg"),
      linkedin: 'https://www.linkedin.com/in/drasadkhan/',
    },
    // {
    //   id: "14",
    //   name: "Jason Amoako-Agyei",
    //   image: require("assets/img/participants/Jason.jpg"),
    //   linkedin: 'https://www.linkedin.com/in/jasonamoakoagyei/',
    // },
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
    // {
    //   id: '8',
    //   name: "Christabel Kuuniffaah",
    //   image: require("assets/img/participants/Kuuni.jpg"),
    //   linkedin: 'https://www.linkedin.com/in/christabel-mwinimaala-kuuniffaah/',
    // },
    {
      id: "9",
      name: "Munyaradzi Madzoma",
      image: require("assets/img/participants/Munya.jpg"),
      linkedin: 'https://www.linkedin.com/in/mmadzoma/',
    },
    // {
    //   id: '10',
    //   name: "Ayinawu Abdul Malik",
    //   image: require("assets/img/participants/Ayinawu.jpg"),
    //   linkedin: 'https://www.linkedin.com/in/ayinawu-abdul-malik/',
    // },
    // {
    //   id: '10',
    //   name: "Issah Seidu",
    //   image: require("assets/img/participants/Seidu.jpg"),
    //   linkedin: 'https://www.linkedin.com/in/issahseidu/',
    // },
    // {
    //   id: "11",
    //   name: "Mustapha Tidoo Yussif",
    //   image: require("assets/img/participants/Musta.jpg"),
    //   linkedin: 'https://www.linkedin.com/in/mustapha-tidoo-yussif-96871a146/',
    // },
    {
      id: "12",
      name: "Alike Ngbede",
      image: require("assets/img/participants/Alike.jpg"),
      linkedin: 'https://www.linkedin.com/in/ngbede-alike-6505553b',
    },
    {
      id: "13",
      name: "Umu Salamata Jalloh",
      image: require("assets/img/participants/Umu.jpg"),
      linkedin: 'https://www.linkedin.com/in/umu-salamata-jalloh-905bbb173',
    },
    // {
    //   id: "15",
    //   name: "Richmond Kusi",
    //   image: require("assets/img/participants/Richmond.jpg"),
    //   linkedin: 'https://www.linkedin.com/in/richmond-kusi-69216921a',
    // },
    {
      id: "16",
      name: "Armandine Amessouwoe",
      image: require("assets/img/participants/Armadine.jpg"),
      linkedin: 'https://www.linkedin.com/in/armandine-joana',
    },
    // {
    //   id: "17",
    //   name: "Vera Umeh",
    //   image: require("assets/img/participants/Vera.jpg"),
    //   linkedin: 'https://www.linkedin.com/in/veraumeh',
    // },
    // {
    //   id: "18",
    //   name: "Yibralem Tesfaye",
    //   image: require("assets/img/participants/Yibralem.jpg"),
    //   linkedin: 'https://www.linkedin.com/in/yibralem-tesfaye',
    // },
    {
      id: "19",
      name: "Sarra Ben Abdallah",
      image: require("assets/img/participants/Sarra.png"),
      linkedin: 'https://www.linkedin.com/in/sarra-ben-abdallah',
    },
    {
      id: "20",
      name: "Katy Consoer",
      image: require("assets/img/participants/Katy.png"),
      linkedin: 'https://www.linkedin.com/in/katyconsoer',
    },
    {
      id: "21",
      name: "Wande Olafiosye",
      image: require("assets/img/participants/Wande.jpg"),
      linkedin: 'https://www.linkedin.com/in/wande-olafisoye',
    },
    {
      id: "22",
      name: "Justin Haddad",
      image: require("assets/img/participants/Justin.jpg"),
      linkedin: 'https://www.linkedin.com/in/justin-haddad-20aa071b6',
    },
    {
      id: "23",
      name: "Fadumo Ahmed",
      image: require("assets/img/participants/fa.jpg"),
      linkedin: 'https://www.linkedin.com/in/ahmed-fadumo',
    },
    // {
    //   id: "24",
    //   name: "Fadumo Hussen",
    //   image: require("assets/img/participants/fh.jpg"),
    //   linkedin: 'https://www.linkedin.com/in/fadumo-hussen-a51525245',
    // },
    {
      id: "25",
      name: "Serena Clarke",
      image: require("assets/img/participants/serena.jpg"),
      linkedin: 'https://www.linkedin.com/in/serena-clarke-8363ba320',
    },
    {
      id: "26",
      name: "Amna M. Aslam",
      image: require("assets/img/participants/amna.jpg"),
      linkedin: 'https://www.linkedin.com/in/amnamaslam/',
    },
    {
      id: "4",
      name: "Alaa Eltahir",
      image: require("assets/img/participants/ae.jpg"),
      linkedin: 'https://www.linkedin.com/in/alaa-eltahir/',
    },
    {
      id: "27",
      name: "Mahley Louis",
      image: require("assets/img/participants/ml.jpg"),
      linkedin: 'https://www.linkedin.com/in/mahly-louis-0217b8294/',
    },
    {
      id: "28",
      name: "Chinamerem Peterson",
      image: require("assets/img/participants/cp.jpg"),
      linkedin: 'https://www.linkedin.com/in/chinameremp/',
    },
    {
      id: "29",
      name: "Juliet Jocelyn Addo",
      image: require("assets/img/participants/jj.jpg"),
      linkedin: 'https://www.linkedin.com/in/julietjaddo1/',
    },
  ];
  

class Participants extends React.Component {
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
                  <motion.h2 className="display-3"  
                  variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible}}
                    >The Heart of Our Community</motion.h2>
                  <motion.p className="lead text-muted"
                   variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible}}>
                  Explore the vibrant Ad Astra community, a diverse collective of women, immigrants, and minorities driving our mission with unique perspectives, aspirations, and a shared commitment to a brighter future in Technology, Sciences, and Engineering.
                  </motion.p>
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

export default Participants;
