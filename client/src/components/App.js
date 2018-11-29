import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import { connect } from "react-redux";
import * as actions from "../actions";

const Contact = () => <h2>Contact</h2>;

const Tester = () => <h2>Tester dashboard</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div className="notContainer">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/" component={Contact} />
            <Route exact path="/dashboard" component={Dashboard} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
