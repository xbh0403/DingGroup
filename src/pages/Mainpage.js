import React from 'react'
import Navbar from '../components/Navbar'
import { Typography, Stack } from '@mui/material'
import backgroundImage from '../images/cyp.png'
// import useWindowDimensions from '../components/Window';

function Mainpage() {
  // const { height, width } = useWindowDimensions();
  
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
        {/* <Typography variant={width < 600 ? 'h4' : 'h3'} sx={{alignContent:'center', color:'#ffffff'}}> */}
        <Typography variant='h3' sx={{alignContent:'center', color:'#ffffff'}}>
          Welcome to the Ding Lab
        </Typography>
      </Stack>
    </>
  )
}

export default Mainpage