import { Button, Form, Grid, Message, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

const LoginForm = (): JSX.Element => (
  <Grid textAlign="center" style={{ height: "70vh" }} verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 450 }}>
      <Segment>
        <Form size="large">
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="E-mail address"
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
          />

          <Button color="blue" fluid size="large">
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

export default LoginForm;
