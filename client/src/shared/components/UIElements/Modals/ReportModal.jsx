import React from "react";
import { Button, Header, Modal, Form, TextArea } from "semantic-ui-react";

function ReportModal() {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button floated="right" basic color="blue" content="Blue">
          Report
        </Button>
      }
    >
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Header>Default Profile Image</Header>
          <Form>
            <TextArea placeholder="Tell us more" />
          </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button icon="cancel" color="red" onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button
          content="Save"
          labelPosition="right"
          icon="checkmark"
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

export default ReportModal;
