import { combineReducers } from "redux";
import auth from "./auth";
import alert from "./alert";
import userDetails from "./userDetails";

export default combineReducers({ auth, alert, userDetails });
