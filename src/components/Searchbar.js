import React from 'react';
import {
    Form,
    FormGroup,
    Input,
    InputGroup,
    Label,
    Button,
    Container,
    Row,
    Col,
} from "reactstrap";

import {
    FaSearch
} from "react-icons/fa";


const Searchbar = () => {
    return (
        <Container fluid style={{marginTop:20}}>
            <Form style={{alignItems:"center"}}>
                <FormGroup>
                    <Row>
                        <Col xs={12} sm={12}>
                            <InputGroup >
                                <Input type="search" name="search" placeholder="shimla"  />
                                <button type="submit" className="bg-primary"><FaSearch /></button>
                            </InputGroup>
                        </Col>
                    </Row>
                </FormGroup>
            </Form>
        </Container>
    )
}

export default Searchbar
