import React from "react";
import { render } from "react-dom";
import "./index.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import App from "./App";





render(
  <React.StrictMode><App/></React.StrictMode>,
  document.querySelector("#root")

);
