import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { Seat } from "../SeatMap";

const ReviewOrder = ({ seats }: { seats: Seat[] }) => {
  return (
    <List disablePadding>
      {seats.map((seat) => (
        <ListItem key={seat.id} sx={{ py: 1, px: 0 }}>
          {/* <ListItemText primary={seat.id} secondary={seat.detail} /> */}
          Seat ID: <ListItemText primary={seat.id} />
          <Typography>${seat.price}</Typography>
        </ListItem>
      ))}
    </List>
  );
};
export default ReviewOrder;
