import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { fakeInterests, fakeSkills } from "./dummy-data";

function App() {
  console.log("test return", fakeInterests);
  console.log("test return", fakeSkills);
  return (
    <div className="App">
      <p>This is App.tsx</p>
      <Switch></Switch>
    </div>
  );
}

export default App;
