import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  const _onLoginPressed = () => {
    login();
  };

  return (
    <div>
      <h1>Login</h1>
      <TextField
        inputProps={{ style: { color: "white" } }}
        InputLabelProps={{ style: { color: "white" } }}
        required
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        id="username"
        label="username"
        variant="standard"
        fullWidth
      />
      <TextField
        sx={{ borderBottomColor: "white" }}
        inputProps={{ style: { color: "white" } }}
        InputLabelProps={{ style: { color: "white" } }}
        required
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        id="password"
        label="password"
        variant="standard"
        fullWidth
        type="password"
      />
      <Button variant="outlined" onClick={_onLoginPressed}>
        Login
      </Button>
    </div>
  );
};

export default Login;
