import { useState } from "react";
import { Button, Form, Grid, Message, Segment } from "semantic-ui-react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../../actions/auth";

const Login = (props: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const onSubmitHandler = async (e: any) => {
    e.preventDefault();
    props.login(email, password);

    if (props.isAuthenticated) {
      history.replace("/profile");
    }
  };

  return (
    <Grid textAlign="center" style={{ height: "70vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Segment>
          <Form size="large" onSubmit={onSubmitHandler}>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button color="blue" fluid size="large" type="submit">
              Login
            </Button>
          </Form>
          <Message>
            New to us? <Link to="/register">Sign Up</Link>
          </Message>
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

const mapStateToProps = (state: any) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
