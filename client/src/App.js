import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Issa win</p>
          <a href="/auth/google">Sign in with google</a>
          <a href="/api/client">Client details</a>
        </header>
      </div>
    );
  }
}

export default App;
