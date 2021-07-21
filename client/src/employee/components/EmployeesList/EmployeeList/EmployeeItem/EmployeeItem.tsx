import React from "react";
import { Link } from "react-router-dom";
import { Card, Button, Icon } from "semantic-ui-react";

import { EmployeeData } from "../../EmployeesList";

const extra = (manager: string, id: string): JSX.Element => {
  return (
    <React.Fragment>
      <Link to="/">
        <Icon name="user" />
        Manager: {manager}
      </Link>
      <Link to={`${id}/details`}>
        <Button animated floated="right" color="blue">
          <Button.Content visible>View</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow right" />
          </Button.Content>
        </Button>
      </Link>
    </React.Fragment>
  );
};

const EmployeeItem: React.FC<{ employee: EmployeeData }> = (props) => {
  const {
    fistName,
    lastName,
    position,
    description,
    manager,
    id,
  }: EmployeeData = props.employee;

  return (
    <Card
      header={`${fistName} ${lastName}`}
      meta={position}
      description={description}
      extra={extra(manager, id)}
    />
  );
};

export default EmployeeItem;
