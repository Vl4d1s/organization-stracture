import { REGISTER_SUCCESS, REGISTER_FAIL } from "../actions/types";

const initialState: {
  token: string | null;
  isAuthenticated: null | boolean;
  loading: boolean;
  user: null | string;
} = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
};

const authReducer = (
  state = initialState,
  action: { type: string; payload: { token: string } }
) => {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      localStorage.setItem("token", payload.token);
      return { ...state, ...payload, isAuthenticated: true, loading: false };
    case REGISTER_FAIL:
      localStorage.removeItem("token");
      return { ...state, token: null, isAuthenticated: false, loading: false };
    default:
      return state;
  }
};

export default authReducer;
