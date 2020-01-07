import React from "react";
import ReactDom from "react-dom";
import App from "./App.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";

ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
