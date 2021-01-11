import React from 'react';
import {
    Form,
    FormGroup,
    Input,
    Label,
    Button,
} from "reactstrap";

import "./delete.css";

const DeleteData = () => {
    return (
        <Form>
            <FormGroup>
                <Label for="title">postName</Label>
                <Input type="text" value="shimla" readOnly />
            </FormGroup>
            
            <FormGroup check>
                <Label for="delete" className="float-right" check>
                <Input type="checkbox" id="" value="" />
                </Label>
            </FormGroup>
            <FormGroup>
                <Label for="title">postName</Label>
                <Input type="text" value="shimla" readOnly />
            </FormGroup>
            
            <FormGroup check>
                <Label for="delete" className="float-right" check>
                <Input type="checkbox" id="" value="" />
                </Label>
            </FormGroup><FormGroup>
            <Label for="title">postName</Label>
            <Input type="text" value="shimla" readOnly />
        </FormGroup>
        
        <FormGroup check>
            <Label for="delete" className="float-right" check>
            <Input type="checkbox" id="" value="" />
            </Label>
        </FormGroup><FormGroup>
        <Label for="title">postName</Label>
        <Input type="text" value="shimla" readOnly />
    </FormGroup>
    
    <FormGroup check>
        <Label for="delete" className="float-right" check>
        <Input type="checkbox" id="" value="" />
        </Label>
    </FormGroup>
            <FormGroup className="text-center mt-2">
                <Button color="danger">Delete</Button>
            </FormGroup>
        </Form>
    )
}

export default DeleteData
