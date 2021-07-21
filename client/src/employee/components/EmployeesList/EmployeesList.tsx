import { Container, Card } from "semantic-ui-react";

import EmployeeItem from "./EmployeeList/EmployeeItem/EmployeeItem";

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

const EmployeesList = (): JSX.Element => {
  const renderedCards: JSX.Element[] = cards.map((card) => {
    return <EmployeeItem employee={card} />;
  });

  return (
    <Container>
      <Card.Group doubling itemsPerRow={4} stackable>
        {renderedCards}
      </Card.Group>
    </Container>
  );
};

export default EmployeesList;
