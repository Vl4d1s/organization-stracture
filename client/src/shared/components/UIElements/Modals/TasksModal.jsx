import React from "react";
import { Button, Header, Modal, List } from "semantic-ui-react";

function TasksModal(props) {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<List.Header as="a">Installing redux</List.Header>}
    >
      <Modal.Header>{props.title}</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Header>Task Description</Header>
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
}

export default TasksModal;
