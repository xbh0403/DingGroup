import React from 'react'
import Navbar from '../components/Navbar'
import { Typography, Stack, Box, Grid, useMediaQuery, CssBaseline } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ProgramCard from '../components/ProgramCard'
import backgroundImage from '../images/cyp.png'

function Join() {
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
          Join us
        </Typography>
      </Stack>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container
              spacing={1}
              direction="row"
              justifyContent="center"
              alignItems="center"
              sx={{mt:5}}>
          <Grid item xs={12}>
            <Typography variant="h4" align='center' width={"80%"} sx={{m: 'auto'}}>
              Graduate Programs
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <ProgramCard 
            name={"M.Sc. and Ph.D. in Bioinformatics"}
            details={"Click the card to learn more about our programs."}
            href={"https://www.bioinformatics.ubc.ca/"}/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <ProgramCard 
            name={"M.Sc. and Ph.D. in Computer Science"}
            details={"Click the card to learn more about our programs."}
            href={"https://www.cs.ubc.ca/students/grad/graduate-programs"}/>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  )
}

export default Join