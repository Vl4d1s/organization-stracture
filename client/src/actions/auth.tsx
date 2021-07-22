import axios from "axios";
import { REGISTER_SUCCESS, REGISTER_FAIL } from "./types";

const ipAddress = "http://127.0.0.1:3000";

export interface bodyType {
  name: string;
  email: string;
  password: string;
}
// Register User
export const register =
  ({ name, email, password }: bodyType) =>
  async (dispatch: any) => {
    const body: bodyType = { name, email, password };
    try {
      const res = await axios.post(`${ipAddress}/api/auth/login`, body);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
      });
    }
  };
