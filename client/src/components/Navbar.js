import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Stack, Link } from '@mui/material';
import logo from '../images/UBC-logo-2018-fullsig-blue-rgb72.jpg'

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Link href="https://www.ubc.ca">
          <img src={logo} alt="example" />
      </Link>
      <AppBar position="static" sx={{ bgcolor: "#02145" }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="a" href="/"
            sx={{ color: 'inherit', textDecoration: 'none',}}
          >The Ding Group Logo
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Stack direction="row" justifyContent="center" alignItems="center"spacing={2}>
                <Typography variant="h6" noWrap component="a" href="/Research"
                  sx={{color: 'inherit', textDecoration: 'none',}}
                >Research
                </Typography>
                <Typography
                  variant="h6" noWrap component="a" href="/People"
                  sx={{ color: 'inherit', textDecoration: 'none', }}
                >People
                </Typography>
                <Typography variant="h6" noWrap component="a" href="/Contact"
                  sx={{ color: 'inherit', textDecoration: 'none', }}
                >Contact
                </Typography>
              </Stack>
            </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
