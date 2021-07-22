import React from "react";
import { List } from "semantic-ui-react";
// import { Link } from "react-router-dom";
import SegmentCard from "../../../shared/components/UIElements/SegmentCard/SegmentCard";

const EmployeeTasks = (props) => {
  //   const { fistName, lastName, position, manager } = props.employee[0];
  return (
    <React.Fragment>
      <SegmentCard title="My tasks">
        <List divided relaxed>
          <List.Item>
            <List.Icon name="github" size="large" verticalAlign="middle" />
            <List.Content>
              <List.Header as="a">Semantic-Org/Semantic-UI</List.Header>
              <List.Description as="a">Updated 10 mins ago</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="github" size="large" verticalAlign="middle" />
            <List.Content>
              <List.Header as="a">Semantic-Org/Semantic-UI-Docs</List.Header>
              <List.Description as="a">Updated 22 mins ago</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="github" size="large" verticalAlign="middle" />
            <List.Content>
              <List.Header as="a">Semantic-Org/Semantic-UI-Meteor</List.Header>
              <List.Description as="a">Updated 34 mins ago</List.Description>
            </List.Content>
          </List.Item>
        </List>
      </SegmentCard>
    </React.Fragment>
  );
};

export default EmployeeTasks;
