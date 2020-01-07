import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <div>
        <Link to="/">Home </Link>
        &nbsp; &nbsp;
        <Link to="/about">About</Link>
        &nbsp; &nbsp;
        <Link to="/contact">Contact</Link>
      </div>
    );
  }
}

export default Navbar;
