import { Route, Switch } from "react-router-dom";

import EmployeeInfo from "../../../employee/pages/EmployeeInfo/EmployeeInfo";
import Login from "../../../employee/pages/Login/Login";
import Register from "../../../employee/pages/Register/Register";
import Employees from "../../../employee/pages/Employees/Employees";
import PrivateRoutes from "./PrivateRoute";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/login" render={() => <Login />} />
      <Route exact path="/register" render={() => <Register />} />
      <PrivateRoutes exact path="/" component={EmployeeInfo} />
      <PrivateRoutes exact path="/profile" component={EmployeeInfo} />
      <PrivateRoutes exact path="/employees" component={Employees} />
    </Switch>
  );
};

export default Routes;
