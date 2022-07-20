import React from 'react'
import Navbar from '../components/Navbar'
import { Typography, Stack, Grid, Box, IconButton } from '@mui/material'
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import GoogleIcon from '@mui/icons-material/Google';
import backgroundImage from '../images/cyp.png'

function People() {
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
          Our Team
        </Typography>
      </Stack>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container
              spacing={1}
              direction="row"
              justifyContent="center"
              alignItems="center"
              width="80%"
              sx={{m:'auto', mt:5}}>
          <Grid item xs={12}>
            <Typography variant="h4" align='center' sx={{m: 'auto', mb:2}}>
              Principal Investigator
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} sx={{mt: 1}}>
              <img src="https://www.cs.ubc.ca/~jiaruid/images/jiarui.jpg" alt='NA' style={{width:"66%"}} align="left"></img>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant='h4' align='left'>
              Dr. Jiarui Ding
            </Typography>
            <Typography variant='h5' align='left' sx={{mt:5}}>
              Personal Website: {<IconButton onClick={()=>{window.open("https://www.cs.ubc.ca/~jiaruid/index.html", '_blank');}}><OpenInBrowserIcon/></IconButton>}
            </Typography>
            <Typography variant='h5' align='left'>
              Google Scholar: {<IconButton onClick={()=>{window.open("https://scholar.google.ca/citations?user=AtFiBlgAAAAJ&hl=en", '_blank');}}><GoogleIcon/></IconButton>}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4" align='center' sx={{m: 'auto', mt:10}}>
              Team Members
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default People