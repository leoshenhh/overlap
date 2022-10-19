// import {ReactDOM} from "react-dom/client";
// import { App } from "./App";

// const app = document.getElementById("app");
// ReactDOM.createRoot((app as HTMLElement),App());

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('app') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


