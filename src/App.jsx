import * as React from 'react';

import { Box, Grid, Typography } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import "@fontsource/varela-round";

import Urls from './Urls.jsx';
import MobileUrls from './MobileUrls.jsx';

import { isMobile } from 'react-device-detect';

const theme = createTheme({
  typography: {
    fontFamily: 'Varela Round',
    h3: {
        fontSize: 50
    },
    h1: {
        fontSize: 80
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
      <>
          <Grid container direction='column' alignItems='center' justifyContent='flex-end'
          style={{ minHeight: '60vh' }}>    
            <Grid item xs={'12'}>
              <Typography variant={(isMobile) ? 'h3' : 'h1'}>
                Stephen Feria
              </Typography>
            </Grid>
            <Grid item xs={'12'}>
                <MoreHorizIcon sx={{fontSize: 60}}/>
            </Grid>
            <Grid item xs={'12'}>
              <Typography variant={'h4'}>
                I build software.
              </Typography>
            </Grid>
          </Grid>
      { !isMobile && <Grid container alignItems='flex-end' justifyContent='center' style={{ minHeight: '35vh' }}>
            <Grid item>  
                <Urls />
            </Grid>
      </Grid> }
      { isMobile && 
              <>
                <Box sx={{height: '10rem'}} />
                <MobileUrls /> 
              </>}
      </>
    </ThemeProvider>
  );
}

export default App;
