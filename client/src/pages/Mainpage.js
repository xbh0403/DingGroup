import React from 'react'
import Navbar from '../components/Navbar'
import { Typography, Stack } from '@mui/material'
import backgroundImage from '../images/cyp.png'

function Mainpage() {
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
        <Typography variant="h3" sx={{alignContent:'center', color:'#ffffff'}}>
          Welcome to the Ding Lab
        </Typography>
      </Stack>
    </>
  )
}

export default Mainpage