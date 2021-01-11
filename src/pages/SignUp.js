import React from 'react';
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label
} from "reactstrap";

import {
    FaUserPlus
} from "react-icons/fa";

const SignUp = () => {
    return (
        <Form>
            <h1 className="p-5 text-center text-info">Sign Up <FaUserPlus className="text-warning" /> </h1>
          
          <FormGroup className="p-3">
            <Label for="email">Email</Label>
            <Input type="email" name="email" placeholder="yourname@gmail.com" required />
          </FormGroup>

          <FormGroup className="p-3">
            <Label for="password">password</Label>
            <Input type="password" name="password" placeholder="*************" required />
          </FormGroup>

          <FormGroup className="p-3 text-center">
            <Button type="button" color="info"> sign Up </Button>
          </FormGroup>
        </Form>
    )
}

export default SignUp
