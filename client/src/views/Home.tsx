import { AppBar, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <AppBar
        style={{
          flexGrow: 1,
          // backgroundColor: "#242424",
          backdropFilter: "none",
          boxShadow: "none",
          paddingTop: "1rem",
          paddingBottom: "1rem",
        }}
        position="fixed"
      >
        {" "}
        HEADING{" "}
      </AppBar>
      <h1>Home</h1>
      <Button onClick={() => navigate("/browseflight")}> Get started! </Button>
    </div>
  );
};

export default Home;
