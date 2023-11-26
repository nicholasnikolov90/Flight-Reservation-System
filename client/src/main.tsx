import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import BrowseFlight from "./views/BrowseFlight";
import CancelFlight from "./views/CancelFlight";
import Home from "./views/Home";
import Checkout from "./views/Payment/Checkout";
import SeatMap from "./views/SeatMap";
import Login from "./views/authentication/Login";
import SignUp from "./views/authentication/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/browseflight",
    element: <BrowseFlight />,
  },
  {
    path: "/seatmap",
    element: <SeatMap />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/cancelflight",
    element: <CancelFlight />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
