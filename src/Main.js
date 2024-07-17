import { Link } from 'react-router-dom'; 
import './index.css';

const Main = () => {
  return ( 
    <div className='container'>
      <div className="logo">
          <p className='text-logo'>Weather</p>
      </div>

      <div className="infomation">
        <div className="header">
          <h1>Weather & Forecast Website</h1>
        </div>
        <div className="text">
          <p className=''>Use weather website and get weather information daliy and daily.</p>
        </div>
      </div>

      <div className="button">
        <ul>
          <li className='login'><Link to="./Login">Login</Link></li>
          <li className='signin'><Link to="/Signup">Sign up</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Main