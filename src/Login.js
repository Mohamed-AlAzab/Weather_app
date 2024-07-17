import "./index.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
      <div className="login-container">
        <form id="form" action="/">
          <h1>Login</h1>
          <div class="input-control">
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Username or Email"
            />
            <div class="error"></div>
          </div>
          <div class="input-control">
            
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
            />
            <div class="error"></div>
          </div>
          <div class="button-r">
            <ul>
              <li className='login-r'><Link to="/">Login</Link></li>
            </ul>
          </div>
          <div className="info">
            <p>
              Create account ?{" "}
              <Link className="link" to="/Signin">
                Signin
              </Link>
            </p>
          </div>
        </form>
      </div>
  );
};

export default Login;
