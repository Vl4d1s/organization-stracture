import { Container, Card } from "semantic-ui-react";
import { useSelector } from "react-redux";

import EmployeeItem from "./EmployeeList/EmployeeItem/EmployeeItem";
import UserModel from "../../../Models/UserModel";

const EmployeesList = (): JSX.Element => {
  // @ts-ignore
  const employees = useSelector((state) => state.auth.user.employees);
  // @ts-ignore
  const { firstName, lastName } = useSelector((state) => state.auth.user);
  const managersFullName = `${firstName} ${lastName}`;

  const renderedEmployees: JSX.Element[] = employees.map(
    (employee: UserModel, index: number) => {
      return (
        <EmployeeItem
          key={index}
          employee={employee}
          managersFullName={managersFullName}
        />
      );
    }
  );

  return (
    <Container>
      <Card.Group doubling itemsPerRow={4} stackable>
        {renderedEmployees}
      </Card.Group>
    </Container>
  );
};

export default EmployeesList;
