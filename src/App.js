import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    // BEM naming convention
    <div className="app">
      <div className="app__body">
        {/* sidebar */}
        <Sidebar />
        {/* chat */}
      </div>
    </div>
  );
}

export default App;
