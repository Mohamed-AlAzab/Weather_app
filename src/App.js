import "./index.css";
import Main from "./Main.js";
import Login from "./Login.js";
import Signup from "./Signup.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home.js";

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Signup">
            <Signup />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
