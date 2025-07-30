import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // solo si necesitas algo personalizado
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';


AOS.init();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
