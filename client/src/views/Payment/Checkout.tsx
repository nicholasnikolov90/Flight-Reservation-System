import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Seat } from "../SeatMap";
import InformationForm from "./InformationForm";
import PaymentForm from "./PaymentForm";
import ReviewOrder from "./ReviewOrder";

const STEPS = ["Information details", "Payment details", "Review your order"];

export type Information = {
  name: string;
  address: string;
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
  const [activeStep, setActiveStep] = useState(0);
  const [information, setInformation] = useState<Information>({
    name: "",
    address: "",
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

  const handleSubmit = () => {
    setActiveStep(activeStep + 1);
    // TODO: Implement send email
    // TODO: Write seat to database
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
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    Place order
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    onClick={handleSubmit}
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
