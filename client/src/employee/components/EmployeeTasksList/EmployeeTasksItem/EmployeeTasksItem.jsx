import { List } from "semantic-ui-react";
import TasksModal from "../../../../shared/components/UIElements/Modals/TasksModal";

const EmployeeTasksItem = () => {
  return (
    <List.Item>
      <List.Icon loading name="spinner" verticalAlign="middle" />
      <List.Content>
        <TasksModal
          title="Installing redux"
          description="task description..."
        />
        <List.Description as="a">
          Assign date: 10/10/2021 Due: 10/10/2022
        </List.Description>
      </List.Content>
    </List.Item>
  );
};

export default EmployeeTasksItem;
