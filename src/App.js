import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Bundles from "./components/Bundles";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Bundles />
    </React.Fragment>
  );
};

export default App;
