import React from "react";
import { AutoSizer } from "react-virtualized";
import { Button, Grid } from "@mui/material";
import { injectComponents, SidePanelFactory } from "kepler.gl/components";
import SPFactory from "../kepler.gl/side-panel/side-panel";

export default function FramingPage(props: any) {
  const KeplerGl = injectComponents([
    [SidePanelFactory, SPFactory],
  ]);

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <AutoSizer>
        {({ height, width }) => (
          <KeplerGl
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            id="map"
            width={width}
            height={height}
          />
        )}
      </AutoSizer>
      <Grid container sx={{ justifyContent: "flex-end", p: 2 }}>
        <Button variant="contained" onClick={() => props.setPage("Main")}>
          Go Back
        </Button>
      </Grid>
    </div>
  );
}
