import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.js";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import "./index.css";
import { theme } from "./theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename="/phonebook-ts">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
