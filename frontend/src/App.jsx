import { useEffect, useState } from "react";

function App() {
  const [health, setHealth] = useState("Loading...");

  useEffect(() => {
    fetch("http://54.198.4.36:3000/health")
      .then((response) => response.json())
      .then((data) => {
        setHealth(data.message);
      })
      .catch(() => {
        setHealth("API connection failed");
      });
  }, []);

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>DevOps Full Stack Project 🚀</h1>

      <h2>Backend Status:</h2>

      <p>{health}</p>
    </div>
  );
}

export default App;
