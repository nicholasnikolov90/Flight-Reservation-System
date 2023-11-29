import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import "./index.css";
import BrowseFlight from "./views/BrowseFlight";
import CancelFlight from "./views/CancelFlight";
import Home from "./views/Home";
import Checkout from "./views/Payment/Checkout";
import Promotions from "./views/Promotions";
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
  {
    path: "/promotions",
    element: <Promotions />,
  },
]);

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
