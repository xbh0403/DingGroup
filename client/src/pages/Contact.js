import React from 'react'
import Navbar from '../components/Navbar'
import { Typography, Stack, Grid, Box, Link, IconButton, useMediaQuery, CssBaseline } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import backgroundImage from '../images/cyp.png'
import GoogleMapComponent from '../components/GoogleMapComponent';
import useWindowDimensions from '../components/Window';
import EmailIcon from '@mui/icons-material/Email';

function Contact() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(
      () =>
          createTheme({
              palette: {
                  mode: prefersDarkMode ? 'dark' : 'light',
              },
          }),
      [prefersDarkMode],
  );
   
  const { height, width } = useWindowDimensions();
  const handleOnClick = () => {
    window.open("mailto:jiarui.ding@ubc.ca", '_blank');
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Stack
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={2}
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          width: '100%',
          height:'300px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',}}
      >
        <Navbar/>
        <Typography variant="h2" sx={{alignContent:'center', color:'#ffffff'}}>
          Contact us
        </Typography>
      </Stack>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container
              spacing={2}
              direction="row"
              justifyContent="center"
              alignItems="center"
              sx={{mt:5}}>
          <Grid item xs={6}>
            <Typography variant="h5" align='center'>
              Email
            </Typography>
            <Typography variant="body" display='block' align='center' sx={{mt: 1}}>
              jiarui.ding@ubc.ca {<IconButton onClick={handleOnClick}><EmailIcon/></IconButton>}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5" align='left'>
              Address
            </Typography>
            <Typography variant="body" display='block' align='left'>
              Institute for Computing, Information and Cognitive Systems {<Link href="https://icics.ubc.ca/">{"(ICICS)"}</Link>}
            </Typography>
            <Typography variant="body" display='block' align='left'>
              2366 Main Mall, Vancouver, BC Canada V6T 1Z4
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{mt: 5}}>
            <GoogleMapComponent width={width*0.7} height={height > width ? width*0.7 : width*0.35}/>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  )
}

export default Contact