import React, { Component } from "react";
import ReactDom from "react-dom";
import Home from "../components/Home";
import About from "../components/About";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";

import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <main>
        <Navbar />
        <a href="https://www.google.com/">google URL</a>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </main>
    );
  }
}

export default App;
