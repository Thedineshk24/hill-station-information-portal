import React from 'react';
import {
    Input,
    Form,
    FormGroup,
    Button,
    Label
} from "reactstrap";

const UpdateData = () => {
    return (
        <Form style={{marginTop:40}}>
            <FormGroup>
                <Label for="hillstation">hillstation</Label>
                <Input type="text" value="" />
            </FormGroup>

            <FormGroup>
                <Label for="description">Information</Label>
                <Input type="textarea" value="" />
            </FormGroup>

            <FormGroup className="text-center">
                <Button type="submit" color="success">Update</Button>
            </FormGroup>
        </Form>
    )
}

export default UpdateData
