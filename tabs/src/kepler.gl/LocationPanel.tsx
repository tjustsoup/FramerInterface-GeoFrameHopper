import {
  Alert,
  Button,
  ButtonGroup,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import store from "./store";
// import mainStore from "../store/store";
import { updateMap, deleteFeature, setFeatures } from "kepler.gl/actions";
import { useDispatch } from "react-redux";
// icons
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

type LOL = [
  {
    address: "";
    addressComponents: {};
    boundingBox: [];
    coordinates: [number, number];
    id: "";
    locationType: "";
    name: "";
  }
];

export default function LocationPanel() {
  const geo = (store.getState() as any).keplerGl.map.visState.editor.features;
  const dispatch = useDispatch();

  // // Creating the queue - linking a state to the array integer
  //
  // const [currentTask, setCurrentTask] = React.useState(0);
  // const LOL: any = mainStore.getState().requestData.listOfLocations;

  // // Handling map transition between currentTask changes
  //
  // React.useEffect(() => {
  //   /// goTo location on the map
  //   dispatch(
  //     updateMap({
  //       latitude: LOL[currentTask].coordinates[0],
  //       longitude: LOL[currentTask].coordinates[1],
  //       zoom: 17,
  //     })
  //   );
  //   /// dispatch to remove any map features
  //   if (
  //     (store.getState() as any).keplerGl.map.visState.editor.features[0] !=
  //     undefined
  //   ) {
  //     dispatch(
  //       deleteFeature(
  //         (store.getState() as any).keplerGl.map.visState.editor.features[0]
  //       )
  //     );
  //   }
  //   /// dispatch to add the map feature from mainStore that was previously made
  //   if (LOL[currentTask].boundingBox.length > 0) {
  //     dispatch(setFeatures(LOL[currentTask].boundingBox));
  //   }
  // }, [currentTask]);

  const locationTypeList = ['precise', 'extended'] // TEMPORARY CONST

  const [snackOpen, setSnackOpen] = React.useState(false);
  const handleSnackClose = () => {
    setSnackOpen(false);
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={snackOpen}
        autoHideDuration={3000}
        onClose={handleSnackClose}
      >
        <Alert
          onClose={handleSnackClose}
          severity="info"
          sx={{ width: "100%" }}
        >
          Geometry data required
        </Alert>
      </Snackbar>
      <Grid
        container
        direction="column"
        sx={{ height: "100%", width: "100%", px: 2 }}
        spacing={3}
      >
        {/* Hopper Status */}
        <Grid item xs={1}>
          <Typography
            sx={{ fontWeight: "bold" }}
            color="white"
            variant="subtitle2"
          >
            Item 0 of 0
          </Typography>
        </Grid>

        {/* Name + Address */}
        <Grid item xs={1}>
          <TextField
            fullWidth
            disabled
            id="name"
            sx={{ fontSize: 30 }}
            value="{LOL[currentTask].name}"
            variant="standard"
          />
          <Typography variant="caption" color="white">
            address
          </Typography>
        </Grid>

        {/* Location Type Select */}
        <Grid item xs={1}>
          <FormControl>
            {locationTypeList.length > 1 ? (
              <>
                {/* MULTIPLE LOCATIONS */}
                <InputLabel id="locationType">Location Type</InputLabel>
                <Select
                  labelId="locationTypeSelect"
                  id="locationType"
                  label="Location Type"
                  sx={{ width: 300 }}
                >
                  {locationTypeList.map((type: string) => (
                    <MenuItem value={type}>{type}</MenuItem>
                  ))}
                </Select>
              </>
            ) : (
              <>
                {/* SINGLE LOCATION */}
                <InputLabel id="locationType">Location Type</InputLabel>
                <Select
                  labelId="locationTypeSelect"
                  id="locationType"
                  label="Location Type"
                  sx={{ width: 330 }}
                  defaultValue={locationTypeList[0]}
                  disabled
                >
                  {locationTypeList.map((type: string) => (
                    <MenuItem value={type}>{type}</MenuItem>
                  ))}
                </Select>
              </>
            )}
          </FormControl>
        </Grid>

        {/* BUTTONS */}
        <Grid sx={{ mt: 4 }} item xs={1}>
          <ButtonGroup variant="contained">
            {/* Previous_Item Button */}
              <Tooltip title="Previous Item">
                <Button>
                  <ArrowBackIcon />
                </Button>
              </Tooltip>

            {/* Go_Next/Finish Buttons */}
              <Tooltip title="Save and Go Next">
                <Button>
                  <ArrowForwardIcon />
                </Button>
              </Tooltip>
          </ButtonGroup>
        </Grid>
        <Grid item container direction="column" sx={{ justifyContent: "flex-end" }} xs={6}>
          <Grid item>
            <Button variant="outlined">
              Go Back
            </Button>
          </Grid>
        </Grid>

        {/* <Grid item xs={1}>
          <Button
            variant="contained"
            onClick={() => console.log(store.getState().keplerGl)}
          >
            Console log
          </Button>
        </Grid> */}
      </Grid>
    </>
  );
}
