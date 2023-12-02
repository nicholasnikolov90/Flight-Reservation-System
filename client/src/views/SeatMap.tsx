export type Seat = {
  id: number;
  isReserved: boolean;
  isSelected: boolean;
  price: number;
};

type MySQLSeat = {
  seat_id: number;
  seat_number: number;
  seat_type: string;
  availability: number;
  price: number;
  flight: number;
};

import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SeatMap = () => {
  const [seats, setSeats] = useState<Seat[]>([]);
  const navigate = useNavigate();
  const location = useLocation();
  const flightId = location.state.flightId;

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `http://127.0.0.1:8000/app/seats-on-flight/${flightId}`
      );
      const sqlSeats: MySQLSeat[] = await res.json();
      const newSeats = sqlSeats.map((sqlSeat) => {
        return {
          id: sqlSeat.seat_number,
          isReserved: sqlSeat.availability === 1 ? false : true,
          isSelected: false,
          price: Number(sqlSeat.price),
        };
      });
      setSeats(newSeats);
    };
    fetchData();
  }, []);

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
    navigate("/checkout", {
      state: { seats: seatToCheckout, flightId: flightId },
    });
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
