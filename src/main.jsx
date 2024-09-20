import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ShippersProvider } from "./contexts/shippersContext.jsx";
import "./index.css";

import { Route, Routes, BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ShippersProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </ShippersProvider>
    </BrowserRouter>
  </React.StrictMode>
);
