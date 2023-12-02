import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Seat } from "../SeatMap";
import InformationForm from "./InformationForm";
import PaymentForm from "./PaymentForm";
import ReviewOrder from "./ReviewOrder";

const STEPS = ["Information details", "Payment details", "Review your order"];

export type Information = {
  name: string;
  address: string;
  email: string;
  city: string;
  province: string;
  postalcode: string;
  country: string;
};

export type Card = {
  name: string;
  number: string;
  expDate: string;
  cvv: string;
};

// Template reference: https://github.com/mui/material-ui/tree/v5.14.18/docs/data/material/getting-started/templates/checkout

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const [activeStep, setActiveStep] = useState(0);
  const [information, setInformation] = useState<Information>({
    name: "",
    address: "",
    email: "",
    city: "",
    province: "",
    postalcode: "",
    country: "",
  });
  const [card, setCard] = useState<Card>({
    name: "",
    number: "",
    expDate: "",
    cvv: "",
  });
  const location = useLocation();
  const seats: Seat[] = location.state.seats;
  const flightId = location.state.flightId;

  function getStepContent(step: number) {
    switch (step) {
      case 0:
        return (
          <InformationForm
            information={information}
            setInformation={setInformation}
          />
        );
      case 1:
        return <PaymentForm card={card} setCard={setCard} />;
      case 2:
        return <ReviewOrder seats={seats} />;
      default:
        throw new Error("Unknown step");
    }
  }

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleLoggedInSubmit = async () => {
    console.log(seats[0].id);
    const res = await fetch(
      `http://127.0.0.1:8000/app/booking-create/${seats[0].id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          insurance: 0,
          user: user.id,
          flight: flightId,
        }),
      }
    );

    const res2 = await fetch(`http://127.0.0.1:8000/app/email/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        price: seats[0].price,
        seat_id: seats[0].id,
      }),
    });
    if (res.ok && res2.ok) {
      setActiveStep(activeStep + 1);
    } else {
      alert("Something went wrong. Please try again.");
    }
    // TODO: Implement send email
  };

  const handleGuestSubmit = async () => {
    const res = await fetch(
      `http://127.0.0.1:8000/app/booking-create-unreg/${seats[0].id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          insurance: 0,
          flight: Number(flightId),
        }),
      }
    );
    const res2 = await fetch(`http://127.0.0.1:8000/app/email/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        price: seats[0].price,
        seat_id: seats[0].id,
      }),
    });
    if (res.ok && res2.ok) {
      setActiveStep(activeStep + 1);
    } else {
      alert("Something went wrong. Please try again.");
    }
    // TODO: Implement send email
  };

  return (
    <>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          {activeStep === STEPS.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}
                {activeStep === STEPS.length - 1 ? (
                  <Button
                    variant="contained"
                    onClick={
                      user.isAuthenticated
                        ? () => handleLoggedInSubmit()
                        : () => handleGuestSubmit()
                    }
                    sx={{ mt: 3, ml: 1 }}
                  >
                    Place order
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    Next
                  </Button>
                )}
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Container>
    </>
  );
};

export default Checkout;
