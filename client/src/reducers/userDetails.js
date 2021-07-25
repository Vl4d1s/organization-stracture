import { LOAD_DETAILS } from "../actions/types";

const initialState = {
  userId: "",
  firstName: "",
  lastName: "",
  email: "",
  role: "",
  position: "",
  tasks: [],
  employees: [],
  reports: [],
};

const userDetailsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_DETAILS:
      return {
        ...state,
        userId: payload.userId,
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        role: payload.role,
        position: payload.position,
        tasks: payload.tasks,
        employees: payload.employees,
        reports: payload.reports,
      };

    default:
      return state;
  }
};

export default userDetailsReducer;
