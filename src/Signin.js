import "./index.css";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div className="signin-container">
      <form id="form" action="/">
        <h1>Sign In</h1>
        <div class="input-control">
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Username"
          />
          <div class="error"></div>
        </div>
        <div class="input-control">
          <input
            id="email"
            name="email"
            type="text"
            placeholder="Email Address"
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
        <div class="input-control">
          <input
            id="password2"
            name="password2"
            type="password"
            placeholder="Repeat password"
          />
          <div class="error"></div>
        </div>
        <div class="button-r">
          <ul>
            <li className="signin-r">
              <Link to="/">Sign In</Link>
            </li>
          </ul>
        </div>
        <div className="info">
          <p>
            Did you have account ?{" "}
            <Link className="link" to="/Login">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signin;
