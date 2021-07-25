import { SET_ALERT, REMOVE_ALERT } from "../actions/types";

export interface IPayload {
  msg: string;
  id: string;
}

const initialState: any[] = [];

const alertReducer = (
  state = initialState,
  action: { type: string; payload: string }
) => {
  const { type, payload } = action;

  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter((alert: { id: string }) => alert.id !== payload);
    default:
      return state;
  }
};

export default alertReducer;
