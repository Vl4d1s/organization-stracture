import React from "react";
import { Image, Header, Divider, Grid, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

import Social from "../Social/Social";
import SegmentCard from "../../../shared/components/UIElements/SegmentCard/SegmentCard";
import ReportModal from "../../../shared/components/UIElements/Modals/ReportModal";
import defaultImage from "../../../assets/defaultImage.png";

const Details = (props) => {
  const { firstName, lastName, position, role, manager } = props.userDetails;

  return (
    <React.Fragment>
      <SegmentCard title="Details">
        <Grid>
          <Grid.Row>
            <Grid.Column width={3}>
              <Image src={defaultImage} size="small" floated="left" />
            </Grid.Column>
            <Grid.Column width={12}>
              <Header as="h3">Name: {`${firstName} ${lastName}`}</Header>
              <Header as="h4">Position: {position}</Header>
              <Social />
              <Divider />
              {role !== "manager" && (
                <Link to="/">
                  <Icon name="user" />
                  Manager: {manager}
                </Link>
              )}
              {role !== "manager" && <ReportModal />}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </SegmentCard>
    </React.Fragment>
  );
};

export default Details;
