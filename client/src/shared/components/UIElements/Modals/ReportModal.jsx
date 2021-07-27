import { useState } from "react";
import { Button, Modal, Form, TextArea, Input } from "semantic-ui-react";

import { useDispatch } from "react-redux";
import { addReport } from "../../../../actions/reports";

function ReportModal({ employeeId, managerMail }) {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onSaveHandler = () => {
    setOpen(false);
    dispatch(addReport({ title, description, employeeId, managerMail }));
    setTitle("");
    setDescription("");
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button floated="right" basic color="red">
          Report
        </Button>
      }
    >
      <Modal.Header>Report to:</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Form>
            <Form.Field
              id="form-input-control-report-title"
              control={Input}
              label="Report Title"
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              name="title"
            />
            <Form.Field
              id="form-input-control-report-description"
              control={TextArea}
              label="Report Description"
              type="text"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              name="description"
            />
          </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="red" onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button color="green" onClick={onSaveHandler}>
          Save
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default ReportModal;
