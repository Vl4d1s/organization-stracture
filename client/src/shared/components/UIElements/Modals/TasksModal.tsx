import React from "react";
import { Button, Header, Modal, List } from "semantic-ui-react";

export interface TasksModalProps {
  title: string;
  header: string;
  description: string;
}

const TasksModal: React.FC<TasksModalProps> = (props) => {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<List.Header as="a">{props.title}</List.Header>}
    >
      <Modal.Header>{props.title}</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Header>{props.header}</Header>
          <p>{props.description}</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button
          content="Ok"
          labelPosition="right"
          icon="checkmark"
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};

export default TasksModal;
