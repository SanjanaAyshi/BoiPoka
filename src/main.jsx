import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Dashboard from "./Component/Dashboard/Dashboard";
import Error from "./Component/Errorpage/Error";
import HomePage from "./Component/Home/HomePage";
import Root from "./Component/Root/Root";
import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="">
        <Root></Root>
      </div>
    ),
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
