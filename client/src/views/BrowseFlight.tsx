import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Template from https://mui.com/material-ui/getting-started/templates/album/

type MySQLFlight = {
  flight_id: number;
  origin: string;
  destination: string;
  date: string;
  departure_time: string;
  arrival_time: string;
  plane: number;
};

type Flight = {
  id: number;
  origin: string;
  destination: string;
  date: string;
  departureTime: string;
  arrivalTime: string;
  planeID: number;
};

const defaultTheme = createTheme();

const BrowseFlight = () => {
  const navigate = useNavigate();
  const [flights, setFlights] = useState<Flight[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://127.0.0.1:8000/app/flight-list/");
      const sqlFlights: MySQLFlight[] = await res.json();
      const newFlights: Flight[] = sqlFlights.map((sqlFlight) => {
        return {
          id: sqlFlight.flight_id,
          origin: sqlFlight.origin,
          destination: sqlFlight.destination,
          date: sqlFlight.date,
          departureTime: sqlFlight.departure_time,
          arrivalTime: sqlFlight.arrival_time,
          planeID: sqlFlight.plane,
        };
      });
      setFlights(newFlights);
      console.log(sqlFlights);
    };
    fetchData();
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <main>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {flights.map((flight) => (
              <Grid item key={flight.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      pt: "56.25%",
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      From: {flight.origin}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                      To: {flight.destination}
                    </Typography>
                    <Typography>
                      Time: {flight.departureTime} - {flight.arrivalTime}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      onClick={() =>
                        navigate("/seatmap", {
                          state: { flightId: flight.id },
                        })
                      }
                      size="small"
                    >
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
};

export default BrowseFlight;
