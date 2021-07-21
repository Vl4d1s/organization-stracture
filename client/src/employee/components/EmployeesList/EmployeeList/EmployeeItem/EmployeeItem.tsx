import React from "react";
import { Link } from "react-router-dom";
import { Card, Button, Icon } from "semantic-ui-react";

import { EmployeeData } from "../../EmployeesList";

const extra = (manager: string): JSX.Element => {
  return (
    <React.Fragment>
      <Link to="/">
        <Icon name="user" />
        Manager: {manager}
      </Link>

      <Button animated floated="right" color="blue">
        <Button.Content visible>View</Button.Content>
        <Button.Content hidden>
          <Icon name="arrow right" />
        </Button.Content>
      </Button>
    </React.Fragment>
  );
};

const EmployeeItem: React.FC<{ employee: EmployeeData }> = (props) => {
  const employee: EmployeeData = props.employee;
  return (
    <Card
      header={`${employee.fistName} ${employee.lastName}`}
      meta={employee.position}
      description={employee.description}
      extra={extra(employee.manager)}
    />
  );
};

export default EmployeeItem;
