import React from 'react';
import { styled } from '@mui/system';
import { Typography, Divider, Link, Stack} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const ImageContainer = styled('div')({
  display: 'flex',
  webkitBoxAlign: 'center',
  height: '100%',
  width: '100%',
  textAlign: 'center',
}); 

const TextOverlay = styled('div')({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: 'white',
});

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      xms: 320,
      ss: 400,
      ms: 600,
      sm: 700,
      md: 900,
      lg: 1200,
      xl: 1536,
      xll: 1900,
      sp: 2400
    },
  },
});

const name = "Stephen Feria"
const description = "I am incoming software engineer at Netflix. I am interested in functional programming, cloud computing, and distributed systems. "
 + "Feel free to contact me below."
const App = () => {
  return (
      <ThemeProvider theme={theme}>
      <ImageContainer>
       <TextOverlay>
        <Card variant='outlined' sx={{width: ['15em', '18em', '20em', '25em', '30em', '40em', '50em', '60em', '70em', '90em'], backgroundColor: '#FFFFFF'}}>
            <CardContent>
                <Typography sx={{paddingBottom: '1em', color: '#313335', fontSize: ['1.5em', '1.6em', '1.75em', '2em', null, '2.5em', '3em', '3.5em', '4em', '5em']}} variant="h4">{name}</Typography>
                <Typography sx={{paddingBottom: '0.5em', fontSize: ['0.7em', '0.8em', '.85em', null, '1em', '1.5em', '1.75em', '2em', '2.5em', '3em']}}variant="body2">{description}</Typography>
                <Divider sx={{marginBottom: '0.5em'}} />
                <Stack sx={{justifyContent: 'center', fontSize: ['0.7em', '0.8em', '.85em', null, '1em', '1.5em', '1.75em', '2em', '2.5em', '3em']}} direction='row' spacing={2}>
                    <Link underline='hover' color='#313335' href="mailto:sferia003@gmail.com">email</Link>
                    <Link underline='hover' color='#313335' href="https://github.com/sferia003">github</Link>
                    <Link underline='hover' color='#313335' href="https://www.linkedin.com/in/stephen-feria-10b99b19a">linkedin</Link>
                    <Link underline='hover' color='#313335' href="https://drive.google.com/uc?export=download&id=1s78sLa9VClyjkDo1NB1NJx6h4Ar6qdK-">resume</Link>
                </ Stack>
            </CardContent>
        </Card>
       </TextOverlay>
      </ImageContainer>
      </ThemeProvider>
  );
};

export default App;
