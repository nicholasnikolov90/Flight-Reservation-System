import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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
      <Button variant="outlined">Login</Button>
    </div>
  );
};

export default Login;
