type seat = {
  number: number;
  isReserved: boolean;
};

const SEATS: seat[] = [];

for (let i = 1; i <= 48; i++) {
  SEATS.push({ number: i, isReserved: true });
}

import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useState } from "react";

const SeatMap = () => {
  const [seats, setSeats] = useState<seat[]>(SEATS);

  const handleSelect = (num: number) => {
    const newSeats = seats.map((seat) => {
      if (seat.number === num) {
        return { ...seat, isReserved: !seat.isReserved };
      }
      return seat;
    });
    setSeats(newSeats);
  };
  return (
    <div>
      <h1>SeatMap</h1>
      <Grid container>
        {seats.map((seat) => (
          <Grid item key={seat.number} xs={3}>
            {" "}
            <Button
              sx={{ color: seat.isReserved ? "red" : "blue" }}
              onClick={() => handleSelect(seat.number)}
            >
              {seat.number}
            </Button>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default SeatMap;
