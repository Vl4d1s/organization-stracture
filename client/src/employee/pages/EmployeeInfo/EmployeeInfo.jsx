import { useParams } from "react-router-dom";
import { Container } from "semantic-ui-react";

import Details from "../../components/EmployeeDetails/EmployeeDetails";
import EmployeeTasks from "../../components/EmployeeTasks/EmployeeTasks";
import { cards } from "../Employees/Employees";

const EmployeeInfo = () => {
  const userId = useParams().userId;
  const employee = cards.filter((card) => card.id === userId);

  return (
    <Container>
      <Details employee={employee} />
      <EmployeeTasks />
    </Container>
  );
  // return employee.length > 0 ? <h1>{employee[0].fistName}</h1> : <h1>Error</h1>;
};

export default EmployeeInfo;
