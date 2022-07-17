import React from 'react'
import Navbar from '../components/Navbar'
import { Typography, Stack, Grid, Box, Link } from '@mui/material'
import backgroundImage from '../images/cyp.png'
import GoogleMap from '../components/GoogleMap';
import useWindowDimensions from '../components/Window';


function Contact() {
  const { height, width } = useWindowDimensions();

  return (
    <>
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
          <Typography variant="body" display='block' align='center'>
            jiarui.ding@ubc.ca
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
          <GoogleMap width={width*0.7} height={height > width ? width*0.7 : width*0.35}/>
        </Grid>
      </Grid>
      </Box>
    </>
  )
}

export default Contact