import React from 'react'
import Navbar from '../components/Navbar'
import { Typography, Stack, useMediaQuery, CssBaseline  } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';

import backgroundImage from '../images/cyp.png'

function News() {
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
          News
        </Typography>
      </Stack>
    </ThemeProvider>
  )
}

export default News