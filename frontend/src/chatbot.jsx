import axios from "axios";
import React, { useState } from "react";

export default function SimpleInput() {
  const [input, setInput] = useState("");
  const [ji, setJi] = useState([]);
  const backendurl=process.env.REACT_APP_URL
  const handleSubmit = async () => {
    const abcd = await axios.post("http://127.0.0.1:5000/chat", {
      question: input,
    });
    setJi(abcd.data.answer);
    setInput("");
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      background: "linear-gradient(135deg, #667eea, #764ba2)",
      fontFamily: "Arial, sans-serif",
      color: "#fff"
    }}>
      <div style={{
        background: "white",
        color: "#333",
        width: "400px",
        borderRadius: "16px",
        padding: "20px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
        textAlign: "center"
      }}>
        <h2 style={{ marginBottom: "20px", color: "#4CAF50" }}>Chatbot</h2>
        <div style={{
          background: "#f4f4f4",
          borderRadius: "12px",
          padding: "15px",
          marginBottom: "20px",
          minHeight: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "16px",
          color: "#333"
        }}>
          {ji || "Ask me something..."}
        </div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your question..."
          style={{
            padding: "10px",
            fontSize: "16px",
            width: "70%",
            borderRadius: "8px",
            border: "1px solid #ccc",
            marginRight: "8px",
            outline: "none"
          }}
        />
        <button
          onClick={handleSubmit}
          style={{
            padding: "10px 16px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#4CAF50",
            color: "white",
            cursor: "pointer",
            transition: "0.3s"
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}
