import React from "react";
import { Grid } from "semantic-ui-react";
import SegmentCard from "../../../shared/components/UIElements/SegmentCard/SegmentCard";

const EmployeeSubordinates = () => {
  return (
    <React.Fragment>
      <SegmentCard title="My subordinates">
        <Grid>
          <Grid.Row>
            <Grid.Column width={16}>...</Grid.Column>
          </Grid.Row>
        </Grid>
      </SegmentCard>
    </React.Fragment>
  );
};

export default EmployeeSubordinates;
