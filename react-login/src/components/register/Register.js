import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Register({ setAuth }) {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { name, email, password };
      const response = await fetch("http://localhost:4000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const parseRes = await response.json();

      
      setAuth(true);
      if (parseRes.jwtToken) {
        localStorage.setItem("jwtToken", parseRes.jwtToken);
        setAuth(true);
        toast.success("Register Successfully");
      } else {
        setAuth(false);
        toast.error(parseRes);
      }

      // console.log(parseRes);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <div className="container-register">
        <div className="form-register">
          <img src="/images/register1.svg" alt="Register" />

          <form className="form-control-register" onSubmit={onSubmitForm}>
            <h1>Register</h1>

            <div className="inputs-register">
              <span className="icon-register">
                <i className="fas fa-user" aria-hidden="true"></i>
              </span>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="inputs-register">
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
            <div className="inputs-register">
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
            <button className="btn-register">Submit</button>
            <Link className="login" to="/login">login</Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
