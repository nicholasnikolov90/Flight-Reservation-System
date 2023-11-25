import TextField from "@mui/material/TextField";
import { useEffect } from "react";
import { Card } from "./Checkout";

type PaymentFormProps = {
  card: Card;
  setCard: React.Dispatch<React.SetStateAction<Card>>;
};

const PaymentForm = ({ card, setCard }: PaymentFormProps) => {
  useEffect(() => {
    console.log(card);
  }, [card]);
  return (
    <div>
      <h1>Payment Form</h1>
      <TextField
        required
        value={card.name}
        onChange={(e) => {
          setCard({ ...card, name: e.target.value });
        }}
        id="cardName"
        label="Name on card"
        fullWidth
        autoComplete="cc-name"
        variant="standard"
      />
      <TextField
        required
        value={card.number}
        onChange={(e) => {
          setCard({ ...card, number: e.target.value });
        }}
        id="cardNumber"
        label="Card number"
        fullWidth
        autoComplete="cc-number"
        variant="standard"
      />
      <TextField
        required
        value={card.expDate}
        onChange={(e) => {
          setCard({ ...card, expDate: e.target.value });
        }}
        id="expDate"
        label="Expiry date"
        fullWidth
        autoComplete="cc-exp"
        variant="standard"
      />
      <TextField
        required
        value={card.cvv}
        onChange={(e) => {
          setCard({ ...card, cvv: e.target.value });
        }}
        id="cvv"
        label="CVV"
        fullWidth
        autoComplete="cc-csc"
        variant="standard"
      />
    </div>
  );
};

export default PaymentForm;
