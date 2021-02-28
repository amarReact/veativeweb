import React, { Fragment } from "react";
import {AiOutlineToTop} from "react-icons/ai"

import {Container, Row, Col, Nav} from "react-bootstrap"
const Footer =()=>{

    const scrollTop=()=>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return(
        <Fragment>
           <div className="dotloop" style={{ 
  backgroundImage: `url(${process.env.PUBLIC_URL + '/images/dot.jpg'})` 
}}>
</div>

             <Container className="footerDiv" fluid>
                <Row className="footerMiddle">
                  
                        <Col  xs={3}>
                            <p>Content</p> 
                            <Nav defaultActiveKey="/" as="ul">
                            <Nav.Item as="li">
                                <Nav.Link eventKey="link-0">K-12 stem</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey="link-1">History & Culture</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey="link-2">language learning</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey="link-2">Higher Education</Nav.Link>
                            </Nav.Item>
                            </Nav>
                            <p>Techonology</p> 
                            <Nav defaultActiveKey="/" as="ul">
                            <Nav.Item as="li">
                                <Nav.Link eventKey="link-0">Interactive Mobile VR Devices</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey="link-1">Standalone  VR Devices</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey="link-2">Storage Solutions</Nav.Link>
                            </Nav.Item>                            
                            </Nav>
                            <p>Stack</p> 
                            <Nav defaultActiveKey="/" as="ul">
                            <Nav.Item as="li">
                                <Nav.Link eventKey="link-0">School Labs</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey="link-1">University Labs</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey="link-2">Industrial Labs</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey="link-2">Mobile Labs</Nav.Link>
                            </Nav.Item>
                            </Nav>
                            </Col>
                        <Col xs={3}>
                        <p>Plateform</p> 
                            <Nav defaultActiveKey="/" as="ul">
                            <Nav.Item as="li">
                                <Nav.Link eventKey="link-0">Assets Library</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey="link-1">App Marketplace</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey="link-2">Content Management</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey="link-2">Content Multicasting & monitoring </Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey="link-2">App Portbility & Maintenance</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey="link-2">Subscription & Onboarding</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey="link-2">Training Analysis</Nav.Link>
                            </Nav.Item>
                            </Nav>
                            <p>Services</p> 
                            <Nav defaultActiveKey="/" as="ul">
                            <Nav.Item as="li">
                                <Nav.Link eventKey="link-0">Immersive Walkthrough</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey="link-1">Immersive tasks & activity</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey="link-2">Immersive Collaboration</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey="link-2">Immersive Product Experience</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey="link-2">Immersive Cross-Platform Migration </Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey="link-2">Immersive Programing</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey="link-2">Experience Design</Nav.Link>
                            </Nav.Item>
                            </Nav>
                        </Col>
                        <Col xs={3}>
                        <p>About Us</p> 
                            <Nav defaultActiveKey="/" as="ul">
                            <Nav.Item as="li">
                                <Nav.Link eventKey="link-0">About us</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey="link-1">Careers</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey="link-2">Blog</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey="link-2">News</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey="link-2">Events</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey="link-2">Contact</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey="link-2">Link</Nav.Link>
                            </Nav.Item>
                            </Nav>
                            <p>Contact Us</p> 
                            <Nav defaultActiveKey="/" as="ul">
                            <Nav.Item as="li">
                                <Nav.Link eventKey="link-0">info@veative.com</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey="link-1">Support</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey="link-2">Library</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey="link-2">Login</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                            &nbsp;
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey="link-2">Terms of Use</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey="link-2">Privacy Policy</Nav.Link>
                            </Nav.Item>
                            </Nav>
                        </Col>
                        <Col xs={3}>
                        <p>Recent Blog</p> 
                            <Nav class="blogdiv" defaultActiveKey="/" as="ul">
                            <Nav.Item as="li">
                                <Nav.Link eventKey="link-0">AR/VR Will Account for a Boost in gdp of $1.5 Trillion</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey="link-1">Degree of freedom...</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey="link-2">Link</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey="link-2">WebXR and COVIDE-19</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey="link-2">Second language Learning and the VR</Nav.Link>
                            </Nav.Item>
                            
                            <Nav.Item as="li">
                                <Nav.Link eventKey="link-2">Open sourse WebXR</Nav.Link>
                            </Nav.Item>
                            </Nav>
                        </Col>
                   
                </Row>               
                </Container>
            
            <AiOutlineToTop onClick={scrollTop} className="scrolltop" />
        </Fragment>
    )
}

export default Footer;