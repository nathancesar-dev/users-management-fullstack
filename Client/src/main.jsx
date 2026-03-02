import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider} from "react-router-dom"
import { GlobalStyle } from "../styles/globalstyles.js";
import router from "./routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle/>
    <RouterProvider router={router} />
  </React.StrictMode>
);
