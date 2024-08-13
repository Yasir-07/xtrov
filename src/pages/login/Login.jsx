import "./login.scss";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hi-ya Xtrovs!!</h1>
          <p>
            The world without "Xtrov" is introverted until you wanna go out!
          </p>
          <span>Don't have an account?</span>
          <span>
            <Link to="/register">
              <button>Register</button>
            </Link>
          </span>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form action="">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
