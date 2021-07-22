import React from "react";
import { Image, Header, Divider, Grid, Icon, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

import Social from "../Social/Social";
import SegmentCard from "../../../shared/components/UIElements/SegmentCard/SegmentCard";

import defaultImage from "../../../assets/defaultImage.png";

const Details = (props) => {
  const { fistName, lastName, position, manager } = props.employee[0];
  return (
    <React.Fragment>
      <SegmentCard title="Details">
        <Grid>
          <Grid.Row>
            <Grid.Column width={3}>
              <Image src={defaultImage} size="small" floated="left" />
            </Grid.Column>
            <Grid.Column width={12}>
              <Header as="h3">Name: {`${fistName} ${lastName}`}</Header>
              <Header as="h4">Position: {`${position}`}</Header>
              <Social />
              <Divider />
              <Link to="/">
                <Icon name="user" />
                Manager: {manager}
              </Link>
              <Button floated="right" basic color="blue" content="Blue">
                Report
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </SegmentCard>
    </React.Fragment>
  );
};

export default Details;
