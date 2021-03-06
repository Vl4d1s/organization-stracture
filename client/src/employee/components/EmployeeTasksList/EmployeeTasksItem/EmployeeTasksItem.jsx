import { List } from "semantic-ui-react";
import ViewTaskModal from "../../../../shared/components/UIElements/Modals/ViewTaskModal";

const EmployeeTasksItem = (props) => {
  const { description, dueDate, title } = props.task;
  return (
    <List.Item>
      <List.Content>
        <ViewTaskModal
          description={description}
          title={title}
          trigger={<List.Header as="a">{title}</List.Header>}
        />
        <List.Description>Due: {dueDate}</List.Description>
      </List.Content>
    </List.Item>
  );
};

export default EmployeeTasksItem;
