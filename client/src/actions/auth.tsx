import axios from "axios";

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "./types";
import setAuthToken from "../utils/setAuthToken";
import { setAlert } from "./alert";

const ipAddress = "http://127.0.0.1:5000";

export interface IUser {
  firstName: string;
  lastName: string;
  role: string;
  position: string;
  email: string;
  password: string;
}

// Load User Data
export const loadUser = () => async (dispatch: any) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get(`${ipAddress}/api/auth/`);

    const payload = res.data;

    dispatch({ type: USER_LOADED, payload });
  } catch (err) {
    dispatch({ type: AUTH_ERROR });
  }
};

// Register User
export const register =
  ({ firstName, lastName, position, role, email, password }: IUser) =>
  async (dispatch: any) => {
    const body: IUser = {
      firstName,
      lastName,
      position,
      role,
      email,
      password,
    };
    try {
      const res = await axios.post(`${ipAddress}/api/users/signup`, body);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
      dispatch(loadUser());
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error: { msg: string }) =>
          dispatch(setAlert(error.msg))
        );
      }

      dispatch({
        type: REGISTER_FAIL,
      });
    }
  };

// Login User
export const login =
  (email: string, password: string) => async (dispatch: any) => {
    try {
      const body = { email, password };
      const res = await axios.post(`${ipAddress}/api/users/login`, body);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });

      dispatch(loadUser());
    } catch (err) {
      const errors = err?.response?.data?.errors;

      if (errors) {
        errors.forEach((error: { msg: string }) =>
          dispatch(setAlert(error.msg))
        );
      }

      dispatch({ type: LOGIN_FAIL });
    }
  };

// Logout User
export const logout = () => (dispatch: any) => {
  dispatch({ type: LOGOUT });
};
