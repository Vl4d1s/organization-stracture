import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, Icon, Container } from "semantic-ui-react";

export interface EmployeeData {
  date: string;
  fistName: string;
  lastName: string;
  description: string;
  manager: string;
  position: string;
}

const cards: EmployeeData[] = [
  {
    date: "2013",
    fistName: "Helen",
    lastName: "Markin",
    description: "Primary Contact",
    manager: "Alex Kreinis",
    position: "Full stack developer",
  },
  {
    date: "2013",
    fistName: "Matthew",
    lastName: "Markin",
    description: "Primary Contact",
    manager: "Alex Kreinis",
    position: "Full stack developer",
  },
  {
    date: "2013",
    fistName: "Molly",
    lastName: "Markin",
    description: "Primary Contact",
    manager: "Alex Kreinis",
    position: "Full stack developer",
  },
  {
    date: "2013",
    fistName: "Molly",
    lastName: "Markin",
    description: "Primary Contact",
    manager: "Alex Kreinis",
    position: "Full stack developer",
  },
];

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

const Employee = () => {
  const renderedEmployee: JSX.Element[] = cards.map((card: EmployeeData) => (
    <Card
      header={`${card.fistName} ${card.lastName}`}
      meta={card.position}
      description={card.description}
      extra={extra(card.manager)}
    />
  ));

  return (
    <Container>
      <Card.Group doubling itemsPerRow={4} stackable>
        {renderedEmployee}
      </Card.Group>
    </Container>
  );
};

export default Employee;
