import * as React from 'react';

import { Grid, Typography } from '@mui/material';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';

import { loadLinksPreset } from "tsparticles-preset-links";
import Particles from 'react-tsparticles';

import { isMobile } from 'react-device-detect';
import Icons from './Icons';

const theme = createTheme({
  typography: {
    h1: {
      fontWeight: 900,
      fontSize: 75,
    },
    h3: {
      fontWeight: 900
    }
  },
  palette: {
    primary: {
      main: '#ffffff'
    },
    secondary: {
      main: '#000000'
    }
  },
});

const App = () => {
  const particlesInit = async (props) => {
    await loadLinksPreset(props)
  };

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Particles init={particlesInit} options={{
          preset: 'links',
          background: {
            color: '#ffffff'
          },
          particles: {
            color: '#000000',
            links: {
              color: '#191926'
            },
            number: {
              value: (isMobile) ? 15 : 100
            }
          },
        }} />
      </Box>
      <Button />
      <Grid container justifyContent={'center'} alignItems={'center'} position='absolute' minHeight={'100vh'}>
        <Grid item>
          <Typography variant={(isMobile) ? 'h3' : 'h1'}>
            Stephen Feria
          </Typography>
          <Icons />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
