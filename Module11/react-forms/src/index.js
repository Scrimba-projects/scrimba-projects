// import React from "react"
// import ReactDOM from "react-dom"
// import Form from "./Form"
//
// ReactDOM.render(<Form />, document.getElementById("app"))

// After
import { createRoot } from 'react-dom/client';
import Form from "./Form";
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<Form />);