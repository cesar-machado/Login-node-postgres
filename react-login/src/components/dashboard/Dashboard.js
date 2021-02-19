import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import { toast } from "react-toastify";

const Dashboard = ({ setAuth }) => {
  const [name, setName] = useState("");

  const getName = async () => {
    try {
      const res = await fetch("http://localhost:4000/dashboard/", {
        method: "GET",
        headers: { jwtToken: localStorage.jwtToken },
      });

      const parseData = await res.json();
      // console.log(parseData)
      setName(parseData.name);
    } catch (err) {
      console.error(err.message);
    }
  };

  const logout = (e) => {
    e.preventDefault();
    try {
      localStorage.removeItem("jwtToken");
      setAuth(false);
      toast.success("Logout successfully");
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getName();
  }, []);

  return (
    <div className="container">
      <div className="content">
        <h1>My login with jwt works!</h1>
        <h2>I am the user: {name}</h2>
        <button className="btn-dash" onClick={(e) => logout(e)}>Logout</button>
      </div>
    </div>
  );
};

export default Dashboard;
