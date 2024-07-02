import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Characters from "./pages/Characters.jsx";
import Contact from "./pages/Contact.jsx";
import DisplayCharacter from "./components/DisplayCharacter.jsx";
import Home from "./pages/Home.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/characters",
    element: <Characters />,
  },
  {
    path: "/characters/:id",
    element: <DisplayCharacter />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
