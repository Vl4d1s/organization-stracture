import React from "react";
import { Segment, Header } from "semantic-ui-react";

const SegmentCard = (props) => {
  return (
    <React.Fragment>
      <Header as="h3" attached="top" inverted>
        {props.title}
      </Header>
      <Segment raised attached>
        {props.children}
      </Segment>
    </React.Fragment>
  );
};

export default SegmentCard;
