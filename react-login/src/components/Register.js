import React from "react";
import "./Register.css";

function Register() {
  return (
    <>
      <div className="container">
        <div className="form">
          <img src="/images/register1.svg" alt="Register" />

          <form className="form-control">
            <h1>Register</h1>

            <div className="inputs">
              <span class="icon">
              <i class="fas fa-user" aria-hidden="true"></i>
              </span>
              <span class="focus-inputs"></span>
              <input
                id="form-inputs"
                type="text"
                name="name"
                placeholder="Name"
              />
            </div>
            <div className="inputs">
              <span class="icon">
                <i class="fa fa-envelope" aria-hidden="true"></i>
              </span>
              <input
                id="form-inputs"
                type="email"
                name="email"
                placeholder="Email "
              />
            </div>
            <div className="inputs">
              <span class="icon">
                <i class="fa fa-lock" aria-hidden="true"></i>
              </span>
              <input
                id="form-inputs"
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
