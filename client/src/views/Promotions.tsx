import { Button } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Promotions = () => {
  const { user, setUser } = useContext(AuthContext);
  return (
    <>
      <h1>Promotions</h1>
      {user.promotions.map((promo) => (
        <ListItem key={promo} sx={{ py: 1, px: 0 }}>
          <ListItemText primary={promo} />
          {user.activePromotion !== promo ? (
            <Button
              onClick={() => {
                setUser({ ...user, activePromotion: promo });
                console.log(user.activePromotion);
              }}
            >
              {" "}
              Apply Promo
            </Button>
          ) : (
            <Button
              onClick={() => {
                setUser({ ...user, activePromotion: "" });
                console.log(user.activePromotion);
              }}
            >
              Remove promo
            </Button>
          )}
        </ListItem>
      ))}
    </>
  );
};

export default Promotions;
