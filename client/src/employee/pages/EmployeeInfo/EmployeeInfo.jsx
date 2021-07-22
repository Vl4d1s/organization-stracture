import { useParams } from "react-router-dom";
import { Container } from "semantic-ui-react";

import Details from "../../components/EmployeeDetails/EmployeeDetails";
import EmployeeTasks from "../../components/EmployeeTasksList/EmployeeTasksList";
import EmployeeSubordinates from "../../components/EmployeeSubordinates/EmployeeSubordinates";
import { cards } from "../Employees/Employees";

const EmployeeInfo = () => {
  const userId = useParams().userId;
  const employee = cards.filter((card) => card.id === userId);

  return employee.length > 0 ? (
    <Container>
      <Details employee={employee} />
      <EmployeeTasks employee={employee} />
      <EmployeeSubordinates />
    </Container>
  ) : (
    <h1>Error</h1>
  );
};

export default EmployeeInfo;
