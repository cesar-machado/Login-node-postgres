import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { toast } from "react-toastify";
function Login({ setAuth }) {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { email, password };
      const response = await fetch("http://localhost:4000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      
      
      const parseRes = await response.json();

      if (parseRes.jwtToken) {
        localStorage.setItem("jwtToken", parseRes.jwtToken);
        setAuth(true);
        toast.success("Logged in Successfully");
      } else {
        setAuth(false);
        toast.error(parseRes);
      }

    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <div className="container-login">
        <div className="login-form">
          <h1>Login</h1>
          <form className="form-control" onSubmit={onSubmitForm}>
            <div className="inputs">
              <span className="icon">
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </span>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="inputs">
              <span className="icon">
                <i className="fa fa-lock" aria-hidden="true"></i>
              </span>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => onChange(e)}
              />
            </div>
            <button className="btn">Submit</button>
          </form>
          <Link className="register" to="/register">
            Register
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;
