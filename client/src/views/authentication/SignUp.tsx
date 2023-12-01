import { Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");

  const { signup } = useContext(AuthContext);
  const _onSignupPressed = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    signup({ username, password, firstName, lastName, address });
    // signup();
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
          setConfirmPassword(e.target.value);
        }}
        id="confirmPassword"
        label="confirmPassword"
        variant="standard"
        type="password"
        fullWidth
      />
      <TextField
        required
        inputProps={{ style: { color: "white" } }}
        InputLabelProps={{ style: { color: "white" } }}
        value={firstName}
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
        id="firstName"
        label="firstName"
        variant="standard"
        fullWidth
      />
      <TextField
        required
        inputProps={{ style: { color: "white" } }}
        InputLabelProps={{ style: { color: "white" } }}
        value={lastName}
        onChange={(e) => {
          setLastName(e.target.value);
        }}
        id="lastName"
        label="lastName"
        variant="standard"
        fullWidth
      />
      <TextField
        required
        inputProps={{ style: { color: "white" } }}
        InputLabelProps={{ style: { color: "white" } }}
        value={address}
        onChange={(e) => {
          setAddress(e.target.value);
        }}
        id="address"
        label="address"
        variant="standard"
        fullWidth
      />
      <Button onClick={_onSignupPressed} variant="outlined">
        Sign Up
      </Button>
    </div>
  );
};

export default SignUp;
