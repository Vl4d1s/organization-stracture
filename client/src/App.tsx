import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import MainNavigation from "./components/Navigation/MainNavigation/MainNavigation";

function App() {
  return (
    <Router>
      <MainNavigation />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
