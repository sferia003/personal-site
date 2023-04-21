import * as React from "react";

import { Grid } from "@mui/material";
import Url from "./Url.jsx";

const Urls = () => {
  return (
    <Grid
      container
      style={{ minWidth: "100vw" }}
      alignItems="center"
      justifyContent="space-evenly"
    >
      <Grid item xs="12" md="4">
        <Url url="sferia003 [AT] gmail [DOT] com" />
      </Grid>
      <Grid item xs="12" md="4">
        <Url url="sferia [AT] purdue [DOT] edu" />
      </Grid>
      <Grid item xs="12" md="4">
        <Url url="github [DOT] com [SLASH] sferia003" />
      </Grid>
    </Grid>
  );
};

export default Urls;
