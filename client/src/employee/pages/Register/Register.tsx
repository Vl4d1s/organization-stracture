import { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Form,
  Input,
  Button,
  Segment,
  Grid,
  Message,
  Icon,
} from "semantic-ui-react";

import { register } from "../../../actions/auth";
import { setAlert } from "../../../actions/alert";

const Register = (props: any) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    position: "",
    role: "",
    email: "",
    password: "",
    password2: "",
  });

  const { firstName, lastName, position, role, email, password, password2 } =
    formData;

  const onInputChange = (e: { target: { name: string; value: string } }) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmitHandler = async () => {
    if (password !== password2) {
      props.setAlert("Password do not match", "danger");
    } else {
      await props.register({
        firstName,
        lastName,
        role,
        position,
        email,
        password,
      });
    }
  };

  return (
    <Grid centered style={{ height: "70vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 700 }}>
        <Segment>
          <Message
            attached
            header="Welcome to our site!"
            content="Fill out the form below to sign-up for a new account"
          />
          <br />

          <Form as="form" onSubmit={onSubmitHandler}>
            <Form.Group widths="equal">
              <Form.Field
                id="form-input-control-first-name"
                control={Input}
                label="First Name"
                type="text"
                onChange={onInputChange}
                value={firstName}
                name="firstName"
              />
              <Form.Field
                id="form-input-control-last-name"
                control={Input}
                label="Last Name"
                type="text"
                onChange={onInputChange}
                value={lastName}
                name="lastName"
              />
              <Form.Field
                id="form-input-control-role"
                control={Input}
                label="Role"
                onChange={onInputChange}
                value={role}
                name="role"
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Field
                id="form-input-control-email"
                control={Input}
                label="Email"
                onChange={onInputChange}
                value={email}
                name="email"
              />
              <Form.Field
                id="form-input-control-position"
                control={Input}
                label="Position"
                onChange={onInputChange}
                value={position}
                name="position"
              />
            </Form.Group>

            <Form.Group widths="equal">
              <Form.Field
                id="form-input-control-password"
                control={Input}
                label="Password"
                type="password"
                onChange={onInputChange}
                value={password}
                name="password"
              />
              <Form.Field
                id="form-input-control-confirm-password"
                control={Input}
                label="Confirm Password"
                type="password"
                onChange={onInputChange}
                value={password2}
                name="password2"
              />
            </Form.Group>
            <Button type="submit" color="blue">
              Submit
            </Button>
          </Form>
          <br />
          <Message attached="bottom" warning>
            <Icon name="help" />
            Already have an account? <Link to="login">Sign in</Link>
          </Message>
        </Segment>
      </Grid.Column>
    </Grid>
  );
};
export default connect(null, { register, setAlert })(Register);
