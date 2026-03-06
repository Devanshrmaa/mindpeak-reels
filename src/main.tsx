import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div style={{ minHeight: "100vh", background: "#0a0e27", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <h1>MindPeak Loading...</h1>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
