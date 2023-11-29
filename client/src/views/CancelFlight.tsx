import { Button, TextField } from "@mui/material";
import { useState } from "react";

const CancelFlight = () => {
  const [bookingId, setBookingId] = useState<string>("");
  const handleCancel = () => {
    // TODO: Await cancel flight api
    alert(`Flight ${bookingId} has been cancelled`);
  };
  return (
    <div>
      <h1>Cancel Flight</h1>
      <TextField
        sx={{ borderBottomColor: "white" }}
        inputProps={{ style: { color: "white" } }}
        InputLabelProps={{ style: { color: "white" } }}
        required
        value={bookingId}
        onChange={(e) => {
          setBookingId(e.target.value);
        }}
        id="flightId"
        label="Flight ID"
        fullWidth
        variant="standard"
      />
      <Button onClick={handleCancel}> Cancel Flight </Button>
    </div>
  );
};

export default CancelFlight;
