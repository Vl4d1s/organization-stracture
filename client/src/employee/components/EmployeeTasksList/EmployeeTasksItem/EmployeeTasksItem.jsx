import { List } from "semantic-ui-react";
import TasksModal from "../../../../shared/components/UIElements/Modals/TasksModal";

const EmployeeTasksItem = (props) => {
  const { title, header, description, assignDate, dueDate } = props.taskList;

  return (
    <List.Item>
      <List.Icon loading name="spinner" verticalAlign="middle" />
      <List.Content>
        <TasksModal title={title} header={header} description={description} />
        <List.Description as="a">
          Assign date: {assignDate} Due: {dueDate}
        </List.Description>
      </List.Content>
    </List.Item>
  );
};

export default EmployeeTasksItem;
