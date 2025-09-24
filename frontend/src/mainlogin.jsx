import React, { useState } from "react";
import './App.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Mainlogin() {
  const [name, setName] = useState({
    "name": "",
    "password": ""
  });
  const navigate = useNavigate();
  const [res, setRes] = useState("");
const backendurl=(process.env.REACT_APP_URL).replace(/\/+$/, "");
  const change = (e) => {
    setName({ ...name, [e.target.name]: e.target.value });
  };

  const change123 = async () => {
    console.log(name);
    const bca = await axios.post(`${backendurl}/check`, name);
    try {
      setRes(bca.data);
      navigate("/profile");
      localStorage.setItem("token", bca.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Hilvon</h1>
      <div className="login-box">
        <label>Enter Name</label>
        <input type="text" name="name" onChange={change} />

        <label>Enter Password</label>
        <input name="password" onChange={change} type="password" />

        <button onClick={change123}>Login</button>
      </div>
    </div>
  );
}
