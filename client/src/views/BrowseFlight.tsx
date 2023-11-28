import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

// Template from https://mui.com/material-ui/getting-started/templates/album/

const FLIGHT_SAMPLE = [
  {
    id: 1,
    origin: "YYC",
    destination: "YVR",
    date: "2021-10-10",
    departureTime: "10:00:00",
    arrivalTime: "12:00:00",
    planeID: 1,
  },
  {
    id: 1,
    origin: "YYC",
    destination: "YVR",
    date: "2021-10-10",
    departureTime: "10:00:00",
    arrivalTime: "12:00:00",
    planeID: 1,
  },
  {
    id: 1,
    origin: "YYC",
    destination: "YVR",
    date: "2021-10-10",
    departureTime: "10:00:00",
    arrivalTime: "12:00:00",
    planeID: 1,
  },
  {
    id: 1,
    origin: "YYC",
    destination: "YVR",
    date: "2021-10-10",
    departureTime: "10:00:00",
    arrivalTime: "12:00:00",
    planeID: 1,
  },
  {
    id: 1,
    origin: "YYC",
    destination: "YVR",
    date: "2021-10-10",
    departureTime: "10:00:00",
    arrivalTime: "12:00:00",
    planeID: 1,
  },
  {
    id: 1,
    origin: "YYC",
    destination: "YVR",
    date: "2021-10-10",
    departureTime: "10:00:00",
    arrivalTime: "12:00:00",
    planeID: 1,
  },
];

const defaultTheme = createTheme();

const BrowseFlight = () => {
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={defaultTheme}>
      <main>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {FLIGHT_SAMPLE.map((flight) => (
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
