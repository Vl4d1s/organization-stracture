import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { Provider } from "react-redux";

import Employee from "./employee/pages/Employees/Employees";
import EmployeeInfo from "./employee/pages/EmployeeInfo/EmployeeInfo";
import MainNavigation from "./shared/components/Navigation/MainNavigation/MainNavigation";
import Login from "./employee/pages/Login/Login";
import Footer from "./shared/components/Footer/Footer";
import store from "./store";
import "./App.css";

const App = () => (
  <Provider store={store}>
    <Router>
      <MainNavigation />
      <div className="page-container">
        <main className="content-wrap">
          <Switch>
            <Route path="/" exact>
              <Employee />
            </Route>
            <Route path="/:userId/details" exact>
              <EmployeeInfo />
            </Route>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Redirect to="/" />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  </Provider>
);

export default App;
