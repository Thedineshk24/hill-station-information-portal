import React from 'react'
import {
    Container,
    Row,
    Col
} from "reactstrap";

// images
import aboutus from "../assets/photos/aboutus.png";
import ourteam from "../assets/photos/ourteam.png";

const About = () => {
    return (
        <Container fluid>
            <Row>
                <Col className="col-auto">
                    <img src={aboutus} alt="About us" id="aboutus" />
                </Col>
                
                <Col className="col-auto">
                    <img src={ourteam} alt="our team" id="ourteam"/>
                </Col>
            </Row>
        </Container>
    )
}

export default About
