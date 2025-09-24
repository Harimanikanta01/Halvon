import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css'
import { Link } from "react-router-dom";
export default function Profile() {
  const [data, setData] = useState(null);
  const token = localStorage.getItem("token");
const backendurl=(process.env.REACT_APP_URL).replace(/\/+$/, "");
  useEffect(() => {
    const fetchProfile = async () => {
      if (!token) return;

      try {
        const response = await axios.get(`${backendurl}/profile1`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setData(response.data);

        if (response.data?.name) {
          localStorage.setItem("name1", response.data.name);
        }
      } catch (err) {
        console.error("Error fetching profile:", err);
      }
    };

    fetchProfile();
  }, [token]);

  return (
    <div>
      <img
        style={{ width: "250px", height: "200px", marginLeft: "30%" }}
        src="data:image/png;base64,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"
      />
      <h3 style={{ marginLeft: "30%", fontFamily: "bold" }}>
        {data?.name || "Loading..."}
      </h3>
      <Link className="Ma" to="/">home</Link>
    </div>
  );
}
