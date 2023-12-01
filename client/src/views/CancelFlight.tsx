import { Button, TextField } from "@mui/material";
import { useState } from "react";

const CancelFlight = () => {
  const [bookingId, setBookingId] = useState<string>("");
  const handleCancel = async () => {
    const res = await fetch(
      `http://127.0.0.1:8000/app/booking-delete/${bookingId}`,
      {
        method: "DELETE",
      }
    );
    if (res.ok) {
      alert(`Flight ${bookingId} has been cancelled`);
    } else {
      alert(`Flight ${bookingId} could not be cancelled`);
    }
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
