import React from "react";
import { List } from "semantic-ui-react";
import { useSelector } from "react-redux";

import SegmentCard from "../../../shared/components/UIElements/SegmentCard/SegmentCard";
import EmployeeTasksItem from "./EmployeeTasksItem/EmployeeTasksItem";
import UserModel from "../../../Models/UserModel";

const EmployeeTasksList = () => {
  // @ts-ignore
  const userDetails: UserModel = useSelector((state) => state.auth.user);
  const { tasks, firstName } = userDetails;

  return (
    <React.Fragment>
      <SegmentCard title={`${firstName}'s Tasks`}>
        <List divided relaxed>
          {tasks.map((task) => {
            return <EmployeeTasksItem task={task} />;
          })}
        </List>
      </SegmentCard>
    </React.Fragment>
  );
};

export default EmployeeTasksList;
