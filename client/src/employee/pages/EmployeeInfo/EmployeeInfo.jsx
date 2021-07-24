import { useParams } from "react-router-dom";
import { Container } from "semantic-ui-react";

import Details from "../../components/EmployeeDetails/EmployeeDetails";
import EmployeeTasks from "../../components/EmployeeTasksList/EmployeeTasksList";
import EmployeeSubordinates from "../../components/EmployeeSubordinates/EmployeeSubordinates";
import { cards } from "../Employees/Employees";

const DUMMY_TASK_LIST = [
  {
    title: "Installing redux",
    header: "description header",
    description: "task description...",
    assignDate: "10/10/20",
    dueDate: "10/10/21",
  },
  {
    title: "Installing react-router",
    header: "description header :) ",
    description: "task description... :)",
    assignDate: "10/10/18",
    dueDate: "10/10/22",
  },
];

const EmployeeInfo = () => {
  const userId = useParams().userId;
  const employee = cards.filter((card) => card.id === userId);

  return employee.length > 0 ? (
    <Container>
      <Details employee={employee} />
      <EmployeeTasks employee={employee} taskList={DUMMY_TASK_LIST} />
      <EmployeeSubordinates />
    </Container>
  ) : (
    <h1>Error</h1>
  );
};

export default EmployeeInfo;
