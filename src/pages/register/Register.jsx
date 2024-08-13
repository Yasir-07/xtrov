import "./register.scss";
import { Link } from "react-router-dom";
function Register() {
  return (
    <>
      <div className="register">
        <div className="card">
          <div className="left">
            <h1>Register</h1>
            <form>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Username" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button>Register</button>
            </form>
          </div>
          <div className="right">
            <h1>Hello there...</h1>
            <p>
              Enter a platform where you can see the world as an extrovert and
              become an "Xtrov"!
            </p>
            <span>Already have an account?</span>
            <span>
              <Link to="/login">
                <button>Login</button>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
