import { Container, Card } from "semantic-ui-react";

import EmployeeItem from "./EmployeeList/EmployeeItem/EmployeeItem";

export interface EmployeeData {
  date: string;
  fistName: string;
  lastName: string;
  description: string;
  manager: string;
  position: string;
  id: string;
}

const EmployeesList: React.FC<{ employees: EmployeeData[] }> = (
  props
): JSX.Element => {
  const renderedCards: JSX.Element[] = props.employees.map((employee) => {
    return <EmployeeItem employee={employee} />;
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
