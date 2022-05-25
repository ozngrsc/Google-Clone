import React from "react";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <div className="app">
      <h1>Google Clone</h1>

      {/* Home (the one with the search on)*/}
      <Home />
      {/*search page (the results page) */}
    </div>
  );
}

export default App;
