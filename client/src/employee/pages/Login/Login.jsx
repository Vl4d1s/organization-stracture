import {
  Button,
  Divider,
  Form,
  Grid,
  Segment,
  Container,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container>
      <Segment placeholder>
        <Grid verticalAlign="middle" columns={2} relaxed="very" stackable>
          <Grid.Column>
            <Form>
              <Form.Input
                icon="user"
                iconPosition="left"
                label="Username"
                placeholder="Username"
              />
              <Form.Input
                icon="lock"
                iconPosition="left"
                label="Password"
                type="password"
              />

              <Button content="Login" primary />
            </Form>
          </Grid.Column>

          <Grid.Column verticalAlign="middle">
            <Link to="/register">
              <Button content="Sign up" icon="signup" size="big" to="/" />
            </Link>
          </Grid.Column>
        </Grid>

        <Divider vertical>Or</Divider>
      </Segment>
    </Container>
  );
};

export default Login;
