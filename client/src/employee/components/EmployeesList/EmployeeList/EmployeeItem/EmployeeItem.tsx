import React from "react";
import { Link } from "react-router-dom";
import { Card, Button, Icon } from "semantic-ui-react";

import TasksModal from "../../../../../shared/components/UIElements/Modals/TasksModal";
import UserModel from "../../../../../Models/UserModel";

export interface EmployeeItemProps {
  employee: UserModel;
  managersFullName: string;
}

const extra = (manager: string, tasks: any, firstName: string) => {
  return (
    <React.Fragment>
      <Link to="/profile">
        <Icon name="user" />
        Manager: {manager}
      </Link>
      <TasksModal
        trigger={
          <Button animated floated="right" color="blue">
            <Button.Content visible>View</Button.Content>
            <Button.Content hidden>
              <Icon name="arrow right" />
            </Button.Content>
          </Button>
        }
        tasks={tasks}
        name={firstName}
      />
    </React.Fragment>
  );
};

const EmployeeItem: React.FC<EmployeeItemProps> = (props) => {
  const { firstName, lastName, position, tasks } = props.employee;
  console.log(tasks);
  return (
    <Card
      header={`${firstName} ${lastName}`}
      meta={position}
      extra={extra(props.managersFullName, tasks, firstName)}
    />
  );
};

export default EmployeeItem;
