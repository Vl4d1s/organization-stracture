import React from "react";
import { List } from "semantic-ui-react";
// import { Link } from "react-router-dom";
import SegmentCard from "../../../shared/components/UIElements/SegmentCard/SegmentCard";
import EmployeeTasksItem from "./EmployeeTasksItem/EmployeeTasksItem";

const EmployeeTasksList = (props) => {
  const { fistName } = props.employee[0];
  return (
    <React.Fragment>
      <SegmentCard title={`${fistName}'s tasks`}>
        <List divided relaxed>
          {props.taskList.map((task) => {
            return <EmployeeTasksItem taskList={task} />;
          })}
        </List>
      </SegmentCard>
    </React.Fragment>
  );
};

export default EmployeeTasksList;
