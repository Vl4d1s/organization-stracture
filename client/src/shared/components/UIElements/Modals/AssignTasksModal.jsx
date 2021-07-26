import { useState } from "react";
import { Button, Modal, Form, TextArea, Input } from "semantic-ui-react";

import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../../../actions/tasks";

function TasksModal({ fullName, employeeMail }) {
  const dispatch = useDispatch();
  const managerId = useSelector((state) => state.auth.user._id);

  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onSaveHandler = () => {
    setOpen(false);
    const dueDate = new Date().toDateString();
    dispatch(addTask({ title, description, managerId, employeeMail, dueDate }));
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button floated="right" primary>
          Assign Task
        </Button>
      }
    >
      <Modal.Header>Assign Task to: {fullName}</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Form>
            <Form.Field
              id="form-input-control-title"
              control={Input}
              label="Task Title"
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              name="title"
            />
            <Form.Field
              id="form-input-control-description"
              control={TextArea}
              label="Task Description"
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

export default TasksModal;
