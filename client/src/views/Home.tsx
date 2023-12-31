import { AppBar, Button, Typography } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "../styles/Home.css";

const Home = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
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
        {user.isAuthenticated ? (
          <>
            <Button
              sx={{ color: "white" }}
              onClick={() => navigate("/promotions")}
            >
              Promotions
            </Button>
            <Typography
              sx={{
                paddingRight: 2,
              }}
            >
              User ID: {user.id}
            </Typography>
            <Button sx={{ color: "white" }} onClick={() => logout()}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button sx={{ color: "white" }} onClick={() => navigate("/login")}>
              {" "}
              Login{" "}
            </Button>
            <Button sx={{ color: "white" }} onClick={() => navigate("/signup")}>
              {" "}
              Sign Up{" "}
            </Button>
          </>
        )}
      </AppBar>
      <h1>Home</h1>
      <Button onClick={() => navigate("/browseflight")}> Get started! </Button>
      <Button onClick={() => navigate("/cancelflight")}> Cancel Flight </Button>
    </div>
  );
};

export default Home;
