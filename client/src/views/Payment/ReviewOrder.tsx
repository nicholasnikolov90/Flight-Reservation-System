import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Seat } from "../SeatMap";

const PROMOS = {
  "10OFF": 10,
  "20OFF": 20,
  "30OFF": 30,
};

const ReviewOrder = ({ seats }: { seats: Seat[] }) => {
  const { user } = useContext(AuthContext);
  return (
    <List disablePadding>
      {seats.map((seat) => (
        <ListItem key={seat.id} sx={{ py: 1, px: 0 }}>
          {/* <ListItemText primary={seat.id} secondary={seat.detail} /> */}
          Seat ID: <ListItemText primary={seat.id} />
          <Typography>${seat.price}</Typography>
        </ListItem>
      ))}
      <Divider sx={{ borderBottomWidth: 2, borderBottomColor: "black" }} />

      <ListItem sx={{ py: 1, px: 0 }}>
        <ListItemText primary="Total" />
        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
          ${seats.reduce((total, seat) => total + seat.price, 0)}
        </Typography>
      </ListItem>
      {user.activePromotion !== "" && (
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Discounted Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            ${seats.reduce((total, seat) => total + seat.price, 0)} -{" "}
            {PROMOS[user.activePromotion as keyof typeof PROMOS]} = $
            {seats.reduce((total, seat) => total + seat.price, 0) - 10}
          </Typography>
        </ListItem>
      )}
    </List>
  );
};
export default ReviewOrder;
