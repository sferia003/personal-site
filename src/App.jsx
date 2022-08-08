import * as React from 'react';

import { Grid, Typography } from '@mui/material';
import { Button } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';

import { isMobile } from 'react-device-detect';

import Icons from './Icons';

const theme = createTheme({
  typography: {
    h1: {
      fontWeight: 900,
      fontSize: 60,
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

  return (
    <ThemeProvider theme={theme}>
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
