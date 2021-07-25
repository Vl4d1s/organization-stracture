import React from "react";
import { List } from "semantic-ui-react";
import SegmentCard from "../../../shared/components/UIElements/SegmentCard/SegmentCard";
import EmployeeTasksItem from "./EmployeeTasksItem/EmployeeTasksItem";

const DUMMY_TASK_LIST = [
  {
    title: "Installing redux",
    header: "description header",
    description: "task description...",
    assignDate: "10/10/20",
    dueDate: "10/10/21",
  },
  {
    title: "Installing react-router",
    header: "description header :) ",
    description: "task description... :)",
    assignDate: "10/10/18",
    dueDate: "10/10/22",
  },
];

const EmployeeTasksList = (props) => {
  const { firstName, role } = props.userDetails;

  return (
    <React.Fragment>
      <SegmentCard
        title={`${firstName}'s ${role === "manager" ? "Reports" : "Tasks"}`}
      >
        <List divided relaxed>
          {DUMMY_TASK_LIST.map((task) => {
            return <EmployeeTasksItem taskList={task} />;
          })}
        </List>
      </SegmentCard>
    </React.Fragment>
  );
};

export default EmployeeTasksList;
