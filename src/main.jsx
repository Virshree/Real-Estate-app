import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { GlobalProvider } from "./context/provider";
import { AuthContext, AuthProvider } from "./context/AuthContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
    <GlobalProvider>
      <App />
    </GlobalProvider>
    </AuthProvider>
  </StrictMode>
);
