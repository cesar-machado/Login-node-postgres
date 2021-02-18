import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Login}  />
          <Route path="/register" exact component={Register}  />
          <Route path="/dashboard" exact component={Dashboard}  />
        </Switch>
      </Router>
    </>
  );
}

export default App;
