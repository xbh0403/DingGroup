import React from 'react'
import Navbar from '../components/Navbar'
import { Typography, Stack, Grid, Box, Link } from '@mui/material'
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import backgroundImage from '../images/cyp.png'
import GoogleMap from '../components/GoogleMap';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Contact() {
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
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{mt:10, px:10}}>
        <Grid item xs={6}>
          <Typography variant="h5" sx={{alignContent:'center', color:'#000000'}}>
            Email
          </Typography>
          <Typography variant="h6" display='block' sx={{alignContent:'center', color:'#000000'}}>
            jiarui.ding@ubc.ca
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h5" sx={{alignContent:'center', color:'#000000'}}>
            Address
          </Typography>
          <Typography variant="body" display='block' sx={{alignContent:'center', color:'#000000'}}>
            Institute for Computing, Information and Cognitive Systems {<Link href="https://icics.ubc.ca/">{"(ICICS)"}</Link>}
          </Typography>
          <Typography variant="body" display='block' sx={{alignContent:'center', color:'#000000'}}>
            2366 Main Mall, Vancouver, BC Canada V6T 1Z4
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Item>2</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>3</Item>
        </Grid>
        <Grid item xs={12}>
          <GoogleMap />
        </Grid>
      </Grid>
      </Box>
    </>
  )
}

export default Contact