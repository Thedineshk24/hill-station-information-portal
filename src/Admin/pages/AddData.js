import React from 'react';
import {
    Input,
    Form,
    FormGroup,
    Button,
    Label
} from "reactstrap";

const AddData = () => {
    return (
        <Form style={{marginTop:40}}>
            <FormGroup>
                <Label for="hillstation">Hillstation</Label>
                <Input type="text" placeholder="add hill station name ex: shimla" />
            </FormGroup>

            <FormGroup>
                <Label for="hillstation">Image</Label>
                <Input type="file" placeholder="add hill station name ex: shimla" />
            </FormGroup>

            <FormGroup>
                <Label for="description">Information</Label>
                <Input type="textarea" rows="15" placeholder="description"/>
            </FormGroup>

            <FormGroup className="text-center">
                <Button type="submit" color="success">Insert Data</Button>
            </FormGroup>
        </Form>
    )
}

export default AddData
