import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3000/") // Byt ut 3000 mot backend-porten om du ändrat den!
      .then(response => {
        setMessage(response.data);
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Learning Arbitrage</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;


