import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import store from "./store/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Toaster position="top-right" />
      <App />
    </BrowserRouter>
  </Provider>
);
