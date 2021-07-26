import React from "react";
import { Button, List, Modal } from "semantic-ui-react";

function TasksModal({ trigger, tasks, name }) {
  const [open, setOpen] = React.useState(false);

  const renderedTask = tasks.map((task) => {
    const { title, description } = task;
    return (
      <List.Item>
        <List.Icon name="marker" />
        <List.Content>
          <List.Header as="a">{title}</List.Header>
          <List.Description>{description}</List.Description>
        </List.Content>
      </List.Item>
    );
  });

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={trigger}
    >
      <Modal.Header>{name}'s Tasks</Modal.Header>
      <Modal.Content>
        <List>{renderedTask}</List>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          Close
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default TasksModal;
