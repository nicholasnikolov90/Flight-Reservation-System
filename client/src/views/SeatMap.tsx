export type Seat = {
  id: number;
  isReserved: boolean;
  isSelected: boolean;
  price: number;
};

const SEATS: Seat[] = [];

for (let i = 1; i <= 48; i++) {
  SEATS.push({ id: i, isReserved: false, isSelected: false, price: i });
}

import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SeatMap = () => {
  const [seats, setSeats] = useState<Seat[]>(SEATS);
  const navigate = useNavigate();
  const location = useLocation();
  const flightId = location.state.flightId;

  const handleSelect = (num: number) => {
    const newSeats = seats.map((seat) => {
      if (seat.id === num) {
        return { ...seat, isSelected: !seat.isSelected };
      }
      return seat;
    });
    setSeats(newSeats);
  };

  const handleCheckout = () => {
    const seatToCheckout = seats.filter((seat) => seat.isSelected);
    navigate("/checkout", { state: { seats: seatToCheckout } });
  };
  return (
    <div>
      <h1>SeatMap</h1>
      <h2>Flight {flightId}</h2>
      <Button variant="outlined" onClick={handleCheckout}>
        Checkout
      </Button>
      <Grid container>
        {seats.map((seat) => (
          <Grid item key={seat.id} xs={3}>
            {" "}
            <Button
              variant="outlined"
              sx={{ color: seat.isSelected ? "red" : "blue" }}
              disabled={seat.isReserved ? true : false}
              onClick={() => handleSelect(seat.id)}
            >
              {seat.id}
            </Button>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default SeatMap;
