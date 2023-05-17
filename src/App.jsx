import * as React from "react";

import { Grid, Typography } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "@fontsource/varela-round";

import Urls from "./Urls.jsx";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 1900,
    },
  },
  typography: {
    fontFamily: "Varela Round",
  },
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#000000",
    },
  },
});

const App = () => {
  React.useEffect(() => {
    document.body.style.overflow = "hidden";
  });

  return (
    <ThemeProvider theme={theme}>
      <>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: { xs: "80vh", md: "90vh" } }}
        >
          <Grid item xs={"12"}>
            <Typography
              sx={{
                fontSize: {
                  xs: "2.5rem",
                  sm: "3.5rem",
                  md: "5rem",
                  lg: "7rem",
                  xl: "9rem",
                  xxl: "10rem",
                },
              }}
            >
              Stephen Feria
            </Typography>
          </Grid>
          <Grid item xs={"12"}>
            <MoreHorizIcon
              sx={{
                fontSize: {
                  xs: "1.5rem",
                  sm: "3rem",
                  md: "3rem",
                  lg: "5rem",
                  xl: "7rem",
                  xxl: "8rem",
                },
              }}
            />
          </Grid>
          <Grid item xs={"12"}>
            <Typography
              sx={{
                fontSize: {
                  xs: "1.5rem",
                  sm: "2rem",
                  md: "3rem",
                  lg: "3.5rem",
                  xl: "4rem",
                  xxl: "5rem",
                },
              }}
            >
              I build software
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          alignItems="flex-start"
          justifyContent="space-evenly"
          sx={{ minHeight: { xs: "20vh", md: "10vh" } }}
        >
          <Grid item>
            <Urls />
          </Grid>
        </Grid>
      </>
    </ThemeProvider>
  );
};

export default App;
