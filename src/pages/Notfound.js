import React from 'react';
import {
    Badge,
    Row,
    Col,
    Container
} from "reactstrap";


// image
import NotfoundPage from "../assets/photos/404.png";

const Notfound = () => {
    return (
        <Container fluid>
            <Row>
                <Col className="text-center">
                    <img src={NotfoundPage} alt="404 page not found" id="notfound" />
                    <h1 className="not__found__heading">
                        <Badge color="danger">404 page Notfound</Badge>
                    </h1>
                </Col>
            </Row>
        </Container>
    )
}

export default Notfound
