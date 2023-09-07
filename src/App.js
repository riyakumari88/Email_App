import React from "react";
import Email from "./compoents/Email";
import CardView from "./compoents/CardView";
import './App.css'

function App() {
  return (
    <div className="splitScreen">
      <Email className="email" />
      <CardView className="card" />
    </div>
  );
}

export default App;
