import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { UsersContextProvider } from "./context/usersContext";
import { AuthContextProvider } from "./context/authenticationContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <UsersContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </UsersContextProvider>
  </React.StrictMode>
);


