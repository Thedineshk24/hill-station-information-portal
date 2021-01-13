import React,{useState} from 'react';
import {
    Form,
    Row,
    Col,
    Input,
    InputGroup,
    FormGroup,
    Label,
    Button
} from "reactstrap";

import {
    FaSignInAlt
} from "react-icons/fa";


const SignIn = () => {
    return (
        <Form>
            <h1 className="p-5 text-center text-info">Sign In <FaSignInAlt className="text-warning" /> </h1>
            <FormGroup className="p-3">
                <Label for="email">Email</Label>
                <Input type="email" required name="email" placeholder="yourname@gmail.com" />
            </FormGroup>
            <FormGroup className="p-3">
                <Label for="password">password</Label>
                <Input type="password" required name="password" placeholder="************" />
            </FormGroup>
            <FormGroup className="p-3 text-center">
                <Button type="button" color="info">signIn <FaSignInAlt /> </Button>
            </FormGroup>
        </Form>
    )
}

export default SignIn
