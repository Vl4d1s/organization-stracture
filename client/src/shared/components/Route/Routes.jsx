import { Route, Switch, Redirect } from "react-router-dom";

import EmployeeInfo from "../../../employee/pages/EmployeeInfo/EmployeeInfo";
import Login from "../../../employee/pages/Login/Login";
import Register from "../../../employee/pages/Register/Register";
import Employees from "../../../employee/pages/Employees/Employees";
import PrivateRoutes from "./PrivateRoute";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/login" render={() => <Login />} />
      <Route path="/register" render={() => <Register />} />
      {/* <PrivateRoutes  path="/" component={EmployeeInfo} /> */}
      <PrivateRoutes path="/profile" component={EmployeeInfo} />
      <PrivateRoutes path="/employees" component={Employees} />
      <Route path="*">
        <Redirect to="/profile" />
      </Route>
    </Switch>
  );
};

export default Routes;
