import TextField from "@mui/material/TextField";
import { useEffect } from "react";
import { Information } from "./Checkout";

type InformationFormProps = {
  information: Information;
  setInformation: React.Dispatch<React.SetStateAction<Information>>;
};

const InformationForm = ({
  information,
  setInformation,
}: InformationFormProps) => {
  useEffect(() => {
    console.log(information);
  }, [information]);

  return (
    <div>
      <h1>Information Form</h1>
      <TextField
        required
        value={information.name}
        onChange={(e) => {
          setInformation({ ...information, name: e.target.value });
        }}
        id="name"
        label="Full name"
        fullWidth
        variant="standard"
      />
      <TextField
        required
        value={information.address}
        onChange={(e) => {
          setInformation({ ...information, address: e.target.value });
        }}
        id="address"
        label="Address"
        fullWidth
        variant="standard"
      />
      <TextField
        required
        value={information.city}
        onChange={(e) => {
          setInformation({ ...information, city: e.target.value });
        }}
        id="city"
        label="City"
        fullWidth
        variant="standard"
      />
      <TextField
        required
        value={information.province}
        onChange={(e) => {
          setInformation({ ...information, province: e.target.value });
        }}
        id="province"
        label="Province"
        fullWidth
        variant="standard"
      />
      <TextField
        required
        value={information.postalcode}
        onChange={(e) => {
          setInformation({ ...information, postalcode: e.target.value });
        }}
        id="postalcode"
        label="Postal Code"
        fullWidth
        variant="standard"
      />
      <TextField
        required
        value={information.country}
        onChange={(e) => {
          setInformation({ ...information, country: e.target.value });
        }}
        id="country"
        label="Country"
        fullWidth
        variant="standard"
      />
    </div>
  );
};

export default InformationForm;
