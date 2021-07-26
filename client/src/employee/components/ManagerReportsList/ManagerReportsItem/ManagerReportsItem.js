import { List } from "semantic-ui-react";
import ViewTaskModal from "../../../../shared/components/UIElements/Modals/ViewTaskModal";

const EmployeeTasksItem = (props) => {
  const { description, title } = props.report;
  console.log(props.report);
  const { firstName: employeeFirstName } = props.report.givenBy;

  return (
    <List.Item>
      <List.Content>
        <ViewTaskModal
          description={description}
          title={title}
          trigger={<List.Header as="a">{title}</List.Header>}
        />
        {employeeFirstName}
      </List.Content>
    </List.Item>
  );
};

export default EmployeeTasksItem;
