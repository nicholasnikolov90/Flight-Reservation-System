import { AppBar, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <AppBar
        style={{
          justifyContent: "flex-end",
          flexDirection: "row",
          backdropFilter: "none",
          boxShadow: "none",
          paddingTop: "1rem",
          paddingBottom: "1rem",
        }}
        position="fixed"
      >
        <Button sx={{ color: "white" }} onClick={() => navigate("/login")}>
          {" "}
          Login{" "}
        </Button>
        <Button sx={{ color: "white" }} onClick={() => navigate("/signup")}>
          {" "}
          Sign Up{" "}
        </Button>
      </AppBar>
      <h1>Home</h1>
      <Button onClick={() => navigate("/browseflight")}> Get started! </Button>
      <Button onClick={() => navigate("/seatmap")}> Seat map </Button>
      <Button onClick={() => navigate("/checkout")}> Checkout </Button>
      <Button onClick={() => navigate("/cancelflight")}> Cancel Flight </Button>
    </div>
  );
};

export default Home;
