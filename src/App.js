import './index.css';
import logo from './Photo/information-image-1.png';
import Main from './Main.js'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    // <Router>
      <div className="App">
        <Main />
        <div className="image">
          <img src={logo} alt="logo" width='630' height='850' />
        </div>
      </div>
    // </Router>
  );
}

export default App;