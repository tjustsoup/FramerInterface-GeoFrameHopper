import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

export default function MainPage(props: any) {
  return (
    <Grid
      container
      spacing={5}
      sx={{ pt: 5, px: 10, justifyContent: "center" }}
    >
      <Grid item xs={12}>
        <Typography color="white" variant="h2" align="center">
          <b>GeoFrame Hopper</b>
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Card>
          <CardContent>
            <Typography variant="h4" align="center" sx={{ pb: 2 }}>
              Queue
            </Typography>
            <Typography variant="h6" align="center">
              High Priority Requests: 0
            </Typography>
            <Typography variant="h6" align="center">
              Low Priority Requests: 0
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card>
          <CardContent>
            <Typography variant="h4" align="center" sx={{ pb: 2 }}>
              Nearest Due Date
            </Typography>
            <Typography variant="h6" align="center">
              Date: 1/1/2022
            </Typography>
            <Typography variant="h6" align="center">
              Requests: 0
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item container xs={12} sx={{ justifyContent: "center" }}>
        <Grid item>
          <Button variant="contained" onClick={() => props.setPage("Framing")}>
            Start Framing
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
