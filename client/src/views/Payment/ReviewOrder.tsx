import { List, ListItem, ListItemText, Typography } from "@mui/material";

const payments = [
  {
    id: "0123890",
    detail: "YYC - YVR",
    cost: 100,
  },
  {
    id: "0123890",
    detail: "YYC - YVR",
    cost: 100,
  },
  {
    id: "0123890",
    detail: "YYC - YVR",
    cost: 100,
  },
  {
    id: "0123890",
    detail: "YYC - YVR",
    cost: 100,
  },
];

const ReviewOrder = () => {
  return (
    <List disablePadding>
      {payments.map((payment) => (
        <ListItem key={payment.id} sx={{ py: 1, px: 0 }}>
          <ListItemText primary={payment.id} secondary={payment.detail} />
          <Typography>${payment.cost}</Typography>
        </ListItem>
      ))}
    </List>
  );
};
export default ReviewOrder;
