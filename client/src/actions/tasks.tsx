import axios from "axios";
import { setAlert } from "./alert";

const ipAddress = "http://127.0.0.1:5000";

export interface ITask {
  title: string;
  description: string;
  managerId: string;
  employeeMail: string;
  dueDate: Date;
}

export const addTask =
  ({ title, description, managerId, employeeMail, dueDate }: ITask) =>
  async (dispatch: any) => {
    const body = { title, description, managerId, employeeMail, dueDate };

    try {
      await axios.post(`${ipAddress}/api/tasks`, body);
    } catch (err) {
      dispatch(setAlert(err.msg));
    }
  };
