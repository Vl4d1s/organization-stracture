import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Router>
      <Route path="/">
        <Home />
      </Route>
      <Redirect to="/" />
    </Router>
  );
}

export default App;
