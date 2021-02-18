import React from "react";
import "./Login.css";

function Login({ setAuth }) {
  return (
    <div>
      <h1>Login</h1>
      <button
        onClick={() => {
          setAuth(true);
        }}
      >
        Log in
      </button>
      <form></form>
    </div>
  );
}

export default Login;
