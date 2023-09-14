import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import "./Component/css/reset.css"
import "./Component/css/font.css"
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
