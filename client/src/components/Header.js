import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      default:
        return (
          <li className="right headerStuff">
            <a href="/logout">Logout</a>
          </li>
        );
      case false:
        return (
          <li className="right headerStuff">
            <a href="/auth/google">Login with Google </a>
          </li>
        );
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? "/dashboard" : "/"}
            className="brand-logo"
          >
            Dailyvery.co.ke
          </Link>
          <ul className="right headerStuff">{this.renderContent()}</ul>
          <a className="right headerStuff" href="/api/client">
            Client details
          </a>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}
export default connect(mapStateToProps)(Header);
