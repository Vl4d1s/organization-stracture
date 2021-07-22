import { useState } from "react";
import { connect } from "react-redux";
import {
  Form,
  Input,
  Button,
  Select,
  Segment,
  Container,
} from "semantic-ui-react";
import { register } from "../../../actions/auth";

const genderOptions = [
  { key: "y", text: "Yes", value: true },
  { key: "n", text: "No", value: false },
];

const Register = () => {
  const handleSubmit = () => {
    console.log("submited!");
  };

  return (
    <Container>
      <Segment>
        <Form as="form" onSubmit={handleSubmit}>
          <Form.Group widths="equal">
            <Form.Field
              id="form-input-control-first-name"
              control={Input}
              label="First name"
              placeholder="First name"
            />
            <Form.Field
              id="form-input-control-last-name"
              control={Input}
              label="Last name"
              placeholder="Last name"
            />
            <Form.Field
              control={Select}
              options={genderOptions}
              label={{
                children: "Manager?",
                htmlFor: "form-select-control-manager",
              }}
              search
              searchInput={{ id: "form-select-control-manager" }}
            />
          </Form.Group>
          <Form.Field
            id="form-input-control-email"
            control={Input}
            label="Email"
            placeholder="vladismarkin@gmail.com"
          />
          <Form.Group widths="equal">
            <Form.Field
              id="form-input-control-password"
              control={Input}
              label="Password"
              type="password"
            />
            <Form.Field
              id="form-input-control-confirm-password"
              control={Input}
              label="Confirm Password"
              type="password"
            />
          </Form.Group>
          <Form.Field
            id="form-button-control-submit"
            control={Button}
            content="Submit"
            type="submit"
          />
        </Form>
      </Segment>
    </Container>
  );
};
export default connect(null, { register })(Register);
