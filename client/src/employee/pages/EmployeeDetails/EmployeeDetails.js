import { cards } from "../Employees/Employees";
import { useParams } from "react-router-dom";

const EmployeeDetails = () => {
  const userId = useParams().userId;
  const employee = cards.filter((card) => card.id === userId);
  return employee.length > 0 ? <h1>{employee[0].fistName}</h1> : <h1>Error</h1>;
};

export default EmployeeDetails;
