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
import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";
import ContactModal from "components/Modals/ContactModal";
import { motion } from 'framer-motion'; 


const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

const DemoNavbar = () => {
  const [collapseClasses, setCollapseClasses] = useState('')
  const [collapseOpen, setCollapseOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [activeNavItem, setActiveNavItem] = useState("home"); 

 useEffect(() => {
  let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
 }, [])

 useEffect(() => {
  // Inside your useEffect or wherever you're determining the active page
  const currentPath = window.location.pathname;
  let activeItem = "/"; // Default active item

  if (currentPath === "/mission") {
    activeItem = "mission";
  }

  if (currentPath === "/officers") {
    activeItem = "officers";
  }

  if (currentPath === "/participants") {
    activeItem = "participants";
  }
  if (currentPath === "/mentors") {
    activeItem = "mentors";
  }
  if (currentPath === "/sponsors") {
    activeItem = "sponsors";
  }
  if (currentPath === "/board") {
    activeItem = "board";
  }
  if (currentPath === "/celebrations") {
    activeItem = "celebrations";
  }
  if (currentPath === "/testimonial") {
    activeItem = "testimonial";
  }

  if (currentPath === "/contact") {
    activeItem = "contact";
  }
  // Add similar logic for other navigation items

  setActiveNavItem(activeItem);

}, [activeNavItem])

  const onExiting = () => {
    setCollapseClasses("collapsing-out");
  };

  const onExited = () => {
    setCollapseClasses("");
  };

  const handleContact = () => {
    setIsOpen(!isOpen)
  }

  // variant 
  const buttonVariant= { 
    hidden: { 
      x: -20 
    }, 
    visible: { 
      x: 0, 
      transition: { 
      duration: 2 
      } 
    } 
  } 

  

    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"

            initial={false}
            animate={isOpen ? "open" : "closed"}
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <img
                  alt="..."
                  src={require("assets/img/brand/adastra.png")}
                />
              </NavbarBrand>
              <motion.button className="navbar-toggler" id="navbar_global"
                 whileTap={{ scale: 0.97 }}
              >
                <motion.span className="navbar-toggler-icon"
                  variants={{
                    open: { rotate: 180 },
                    closed: { rotate: 0 }
                  }}
                  transition={{ duration: 0.2 }} 
                ></motion.span>
              </motion.button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={collapseClasses}
                onExiting={onExiting}
                onExited={onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          alt="..."
                          src={require("assets/img/brand/adastra_blue.png")}
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="navbar-nav-hover align-items-lg-center" 
                  navbar
                  
                  variants={{
                    open: {
                      clipPath: "inset(0% 0% 0% 0% round 10px)",
                      transition: {
                        type: "spring",
                        bounce: 0,
                        duration: 0.7,
                        delayChildren: 0.3,
                        staggerChildren: 0.05
                      }
                    },
                    closed: {
                      clipPath: "inset(10% 50% 90% 50% round 10px)",
                      transition: {
                        type: "spring",
                        bounce: 0,
                        duration: 0.3
                      }
                    }
                  }}
                  >
                  <NavItem >
                    <NavLink to='/' tag={Link}>
                      <motion.span variants={itemVariants} className={`nav-link-inner--text ${activeNavItem === "/" ? 'active' : ""}`} >Home</motion.span>
                    </NavLink>
                  </NavItem>
                  <NavItem >
                    <NavLink to='/officers' tag={Link}>
                      <motion.span variants={itemVariants} className={`nav-link-inner--text ${activeNavItem === "officers" ? 'active' : ""}`} >Officers</motion.span>
                    </NavLink>
                  </NavItem>
                  <NavItem >
                    <NavLink to='/participants' tag={Link}>
                      <motion.span variants={itemVariants} className={`nav-link-inner--text ${activeNavItem === "participants" ? 'active' : ""}`}>Participants</motion.span>
                    </NavLink>
                  </NavItem>
                  <NavItem >
                    <NavLink to='/mentors' tag={Link}>
                      <motion.span variants={itemVariants} className={`nav-link-inner--text ${activeNavItem === "mentors" ? 'active' : ""}`}>Mentors</motion.span>
                    </NavLink>
                  </NavItem>
                  <NavItem >
                    <NavLink to='/board' tag={Link}>
                      <motion.span variants={itemVariants} className={`nav-link-inner--text ${activeNavItem === "board" ? 'active' : ""}`}>Board</motion.span>
                    </NavLink>
                  </NavItem>
                  <NavItem >
                    <NavLink to='/celebrations' tag={Link}>
                      <motion.span variants={itemVariants} className={`nav-link-inner--text ${activeNavItem === "celebrations" ? 'active' : ""}`}>Celebrations</motion.span>
                    </NavLink>
                  </NavItem>
                </Nav>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem className="d-lg-block ml-lg-4">
                    <motion.div variants={buttonVariant} 
                        initial="hidden" 
                        animate="visible" >
                      <Button
                        className="btn-neutral btn-icon"
                        color="default"
                        target="_blank"
                        onClick={handleContact}
                        
                      >
                        <i className="ni ni-email-83" />

                        <span className="nav-link-inner--text ml-1">
                          Contact US
                        </span>
                      </Button>
                    </motion.div>
                    
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
        <ContactModal isOpen={isOpen} setIsOpen={setIsOpen}/>
      </>
    );
  }

export default DemoNavbar;
