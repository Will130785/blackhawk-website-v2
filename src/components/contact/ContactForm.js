import React from "react";
import 'rsuite/dist/styles/rsuite-default.css';
import { Form, FormGroup, FormControl, ControlLabel, HelpBlock, Button, ButtonToolbar } from 'rsuite';

const FormPage = () => {
return (
  <Form fluid>
    <FormGroup>
      <ControlLabel>Username</ControlLabel>
      <FormControl name="name" />
      <HelpBlock>Required</HelpBlock>
    </FormGroup>
    <FormGroup>
      <ControlLabel>Email</ControlLabel>
      <FormControl name="email" type="email" />
      <HelpBlock>Required</HelpBlock>
    </FormGroup>
    <FormGroup>
      <ControlLabel>Password</ControlLabel>
      <FormControl name="password" type="password" />
    </FormGroup>
    <FormGroup>
      <ControlLabel>Textarea</ControlLabel>
      <FormControl rows={5} name="textarea" componentClass="textarea" />
    </FormGroup>
    <FormGroup>
      <ButtonToolbar>
        <Button appearance="primary">Submit</Button>
        <Button appearance="default">Cancel</Button>
      </ButtonToolbar>
    </FormGroup>
  </Form>

      )
    }

    export default FormPage;