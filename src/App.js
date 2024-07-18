import "./index.css";
import Main from "./Main.js";
import Image from "./Image.js";
import Login from "./Login.js";
import Signup from "./Signup.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home.js";
// import Auth from './componants/auth.js';

function App() {
  return (
    // <Auth />
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Main />
            <Image />
          </Route>
          <Route path="/Login">
            <Login />
            <Image />
          </Route>
          <Route path="/Signup">
            <Signup />
            <Image />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
