import { Button, TextField } from "@mui/material";
import { useState } from "react";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirm] = useState("");
  return (
    <div>
      <h1>Sign Up</h1>
      <TextField
        required
        inputProps={{ style: { color: "white" } }}
        InputLabelProps={{ style: { color: "white" } }}
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
        required
        inputProps={{ style: { color: "white" } }}
        InputLabelProps={{ style: { color: "white" } }}
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        id="password"
        label="password"
        variant="standard"
        type="password"
        fullWidth
      />
      <TextField
        required
        inputProps={{ style: { color: "white" } }}
        InputLabelProps={{ style: { color: "white" } }}
        value={confirmPassword}
        onChange={(e) => {
          setConfirm(e.target.value);
        }}
        id="confirmPassword"
        label="confirmPassword"
        variant="standard"
        type="password"
        fullWidth
      />
      <Button variant="outlined">Sign Up</Button>
    </div>
  );
};

export default SignUp;
