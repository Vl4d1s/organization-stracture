import { useEffect } from "react";
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
import Register from "./employee/pages/Register/Register";
import Footer from "./shared/components/Footer/Footer";
import store from "./store";
import Alert from "./shared/components/UIElements/Alert/Alert";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/auth";
import Routes from "./shared/components/Route/Routes";

import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <MainNavigation />
        <div className="page-container">
          <main className="content-wrap">
            <Switch>
              <Route component={Routes} />
            </Switch>
            <Alert />
          </main>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
