import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
<<<<<<< HEAD
import "./styles.css";
import { AuthProvider } from './context/AuthContext.jsx';
import './i18n';
=======
import "./styles.css"; 
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);