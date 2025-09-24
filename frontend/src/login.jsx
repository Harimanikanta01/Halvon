import React, { useState } from "react";
import './App.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [name, setName] = useState({
    "name": "",
    "password": ""
  });
  const backendurl=(process.env.REACT_APP_URL).replace(/\/+$/, "");
  const navigate = useNavigate();
  const [res, setRes] = useState("");

  const change = (e) => {
    setName({ ...name, [e.target.name]: e.target.value });
  };

  const change123 = async () => {
    console.log(name);
    const bca = await axios.post(`${backendurl}/login`, name);
    try {
      setRes(bca.data);
      console.log(res);
      alert("account created successfully")
      navigate("sighnup")
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

        <button onClick={change123}>Create</button>
      </div>
    </div>
  );
}
