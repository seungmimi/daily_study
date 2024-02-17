import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css"
import {RecoilRoot} from "recoil";
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from "./component/ScrollTop";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <ScrollToTop />
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </BrowserRouter>

);
