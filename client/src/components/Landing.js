import React, { Component } from "react";

class Landing extends Component {
  render() {
    return (
      <div className="container">
        <label className="right sideStuff">User Category</label>
        <select className="browser-default">
          <option value="" disabled selected>
            What is your main business?
          </option>
          <option value="1">Fashion</option>
          <option value="2">Restaurant</option>
          <option value="3">Electronics & others</option>
        </select>
        <div>
          <h3>we do deliveries daily!</h3>
        </div>
      </div>
    );
  }
}

export default Landing;
