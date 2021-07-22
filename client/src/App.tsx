import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Employee from "./employee/pages/Employees/Employees";
import EmployeeDetails from "./employee/pages/EmployeeDetails/EmployeeDetails";
import MainNavigation from "./shared/components/Navigation/MainNavigation/MainNavigation";
// Redux
import { Provider } from "react-redux";
import store from "./store";

const App = () => (
  <Provider store={store}>
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Employee />
          </Route>
          <Route path="/:userId/details" exact>
            <EmployeeDetails />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  </Provider>
);

export default App;
