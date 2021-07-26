import axios from "axios";
import { setAlert } from "./alert";

const ipAddress = "http://127.0.0.1:5000";

export interface IReport {
  title: string;
  description: string;
  employeeId: string;
  managerMail: string;
}

export const addReport =
  ({ title, description, employeeId, managerMail }: IReport) =>
  async (dispatch: any) => {
    const body = { title, description, employeeId, managerMail };
    console.log(body);

    try {
      await axios.post(`${ipAddress}/api/reports`, body);
    } catch (err) {
      dispatch(setAlert(err.msg));
    }
  };
