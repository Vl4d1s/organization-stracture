import React from "react";
import { Image, Header, Divider, Grid, Icon } from "semantic-ui-react";

import Social from "../Social/Social";
import SegmentCard from "../../../shared/components/UIElements/SegmentCard/SegmentCard";
import defaultImage from "../../../assets/defaultImage.png";
import ReportModal from "../../../shared/components/UIElements/Modals/ReportModal";
import UserModel from "../../../Models/UserModel";

export interface DetailsProps {
  userDetails: UserModel;
}

const Details: React.FC<DetailsProps> = ({ userDetails }) => {
  const { firstName, lastName, position, role, manager, _id } = userDetails;

  return (
    <React.Fragment>
      <SegmentCard title="Details">
        <Grid>
          <Grid.Row>
            <Grid.Column width={3}>
              <Image src={defaultImage} size="medium" />
            </Grid.Column>
            <Grid.Column width={12}>
              <Header as="h3">Name: {`${firstName} ${lastName}`}</Header>
              <Header as="h4">Position: {position}</Header>
              <Social />
              <Divider />
              {role !== "manager" && (
                <React.Fragment>
                  <Icon name="user" />
                  Manager: {`${manager.firstName} ${manager.lastName} `}
                </React.Fragment>
              )}
              {role === "employee" && (
                <ReportModal employeeId={_id} managerMail={manager.email} />
              )}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </SegmentCard>
    </React.Fragment>
  );
};

export default Details;
