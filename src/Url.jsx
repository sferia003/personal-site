import * as React from "react";

import { Grid, Typography } from "@mui/material";

const Url = ({ url }) => {
  return (
    <Grid container justifyContent="center">
      <Typography
        sx={{
          fontSize: {
            xs: "0.85rem",
            sm: "1rem",
            in: "1.25rem",
            md: "1rem",
            lg: "1.25rem",
            xl: "1.75rem",
            xxl: "2.25rem",
          },
        }}
      >
        {url}
      </Typography>
    </Grid>
  );
};

export default Url;
