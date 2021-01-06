import React from 'react';
import {    
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Row,
    Col,
    Container
} from "reactstrap";

import {
    FaEnvelope
} from "react-icons/fa"

const Contact = () => {
    return (
        <Container fluid id="contact">
            <Form action="mailto:iamdineshkatariya@gmail.com" method="post" enctype="text/plain">
                <h1 className="text-center">Get in Touch with us <FaEnvelope /> </h1>
                <FormGroup>
                    <Label for="Email">Email</Label>
                    <Input type="email" name="email" placeholder="your email id" />
                </FormGroup>
                <FormGroup>
                    <Label for="Subject">Subject</Label>
                    <Input type="text" name="subject" placeholder="Do u have any suggestion or question?" />
                </FormGroup>
                <FormGroup>
                    <Label for="txtMessage">Description</Label>
                    <Input type="textarea" name="textMsg" placeholder="description.........." />
                </FormGroup>
                <Row>
                    <Col className="text-center text-white">
                        <Button className="bg-warning">Send Mail</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}

export default Contact
