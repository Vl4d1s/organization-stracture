import axios from "axios";
import { REGISTER_SUCCESS, REGISTER_FAIL } from "./types";

const ipAddress = "http://127.0.0.1:5000";

export interface bodyType {
  email: string;
  password: string;
}
// Register User
export const register =
  ({ email, password }: bodyType) =>
  async (dispatch: any) => {
    const body: bodyType = { email, password };
    try {
      const res = await axios.post(`${ipAddress}/api/users/signup`, body);
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
