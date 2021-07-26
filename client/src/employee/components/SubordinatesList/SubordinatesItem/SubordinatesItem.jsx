import { List } from "semantic-ui-react";
import AssignTasksModal from "../../../../shared/components/UIElements/Modals/AssignTasksModal";

const SubordinatesItem = ({ fullName, position, employeeMail }) => {
  return (
    <List.Item>
      <AssignTasksModal fullName={fullName} employeeMail={employeeMail} />
      <List.Icon name="js" verticalAlign="middle" />
      <List.Content>
        <List.Header>{fullName}</List.Header>
      </List.Content>
      <List.Description>Working as: {position}</List.Description>
    </List.Item>
  );
};

export default SubordinatesItem;
