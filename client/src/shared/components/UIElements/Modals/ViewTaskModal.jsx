import React from "react";
import { Button, Modal } from "semantic-ui-react";

function ViewTaskModal({ trigger, description, title }) {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={trigger}
    >
      <Modal.Header>{title}</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <p>{description}</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          Close
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default ViewTaskModal;
