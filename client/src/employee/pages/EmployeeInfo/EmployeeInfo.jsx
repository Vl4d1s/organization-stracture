import { Container } from "semantic-ui-react";

import Details from "../../components/EmployeeDetails/EmployeeDetails";
import EmployeeTasks from "../../components/EmployeeTasksList/EmployeeTasksList";
import EmployeeSubordinates from "../../components/EmployeeSubordinates/EmployeeSubordinates";

const EmployeeInfo = () => {
  return (
    <Container>
      <Details />
      <EmployeeTasks />
      <EmployeeSubordinates />
    </Container>
  );
};

export default EmployeeInfo;
