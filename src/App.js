import './index.css';
import Main from './Main.js'
import Image from './Image.js'
import Login from './Login.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signin from './Signin.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Main />
            <Image />
          </Route>
          <Route  path='/Login'>
            <Login />
            <Image />
          </Route>
          <Route  path='/Signin'>
            <Signin />
            <Image />
          </Route>
        </Switch>
      </div>
    </Router> 
  );
}

export default App;