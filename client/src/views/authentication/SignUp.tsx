import { Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirm] = useState("");
  const { signup } = useContext(AuthContext);
  const _onSignupPressed = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    signup();
  };

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
      <Button onClick={_onSignupPressed} variant="outlined">
        Sign Up
      </Button>
    </div>
  );
};

export default SignUp;
