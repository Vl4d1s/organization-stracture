import EmployeesList from "../../components/EmployeesList/EmployeesList";

export interface EmployeeData {
  date: string;
  fistName: string;
  lastName: string;
  description: string;
  manager: string;
  position: string;
  id: string;
}

export const cards: EmployeeData[] = [
  {
    date: "2013",
    id: "e1",
    fistName: "Helen",
    lastName: "Markin",
    description: "Primary Contact",
    manager: "Alex Kreinis",
    position: "Full stack developer",
  },
  {
    date: "2013",
    id: "e2",
    fistName: "Matthew",
    lastName: "Markin",
    description: "Primary Contact",
    manager: "Alex Kreinis",
    position: "Full stack developer",
  },
  {
    date: "2013",
    id: "e3",
    fistName: "Molly",
    lastName: "Markin",
    description: "Primary Contact",
    manager: "Alex Kreinis",
    position: "Full stack developer",
  },
  {
    date: "2013",
    id: "e4",
    fistName: "Molly",
    lastName: "Markin",
    description: "Primary Contact",
    manager: "Alex Kreinis",
    position: "Full stack developer",
  },
];

const Employee = () => {
  return <EmployeesList employees={cards} />;
};

export default Employee;
