import { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Form,
  Input,
  Button,
  Select,
  Segment,
  Grid,
  Message,
  Icon,
} from "semantic-ui-react";

import { register } from "../../../actions/auth";
import { setAlert } from "../../../actions/alert";

const managerOptions = [
  { key: "y", text: "Yes", value: true },
  { key: "n", text: "No", value: false },
];

const Register = (props: any) => {
  const [formData, setFormData] = useState<{
    email: string;
    password: string;
    password2: string;
  }>({
    email: "",
    password: "",
    password2: "",
  });

  const { email, password, password2 } = formData;

  const onInputChange = (e: { target: { name: any; value: any } }) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmitHandler = async () => {
    if (password !== password2) {
      props.setAlert("Password do not match", "danger");
    } else {
      await props.register({ email, password });
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
                label="First name"
                placeholder="First name"
                // name="name"
                // value={name}
              />
              <Form.Field
                id="form-input-control-last-name"
                control={Input}
                label="Last name"
                placeholder="Last name"
              />
              <Form.Field
                control={Select}
                options={managerOptions}
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
              onChange={onInputChange}
              value={email}
              name="email"
            />
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
