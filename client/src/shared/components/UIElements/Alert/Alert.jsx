import { Message, Container } from "semantic-ui-react";
import { connect } from "react-redux";

const Alert = ({ alerts }) =>
  alerts &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <Container>
      <Message key={alert.id} negative>
        <Message.Header>{alert.msg}</Message.Header>
      </Message>
    </Container>
  ));

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
