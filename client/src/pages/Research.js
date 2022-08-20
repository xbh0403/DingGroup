import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { Typography, Stack, Grid, useMediaQuery, CssBaseline } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PaperCard from '../components/PaperCard'
import {useSelector, useDispatch} from 'react-redux';

import backgroundImage from '../images/cyp.png'
import { getPapersAsync } from '../redux/papers/thunks';

function Research() {
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

  const dispatch = useDispatch();
  const papers = useSelector(state => state.papers.papers);
  useEffect(() => {
    dispatch(getPapersAsync());
  }, [dispatch]);
  console.log(papers);

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
          Research
        </Typography>
      </Stack>
      <Grid sx={{width: "90%", m: "auto"}}>
        <Typography variant="h4" align='center' sx={{mt: 5}}>
          Selected Publications
        </Typography>
        {papers.map(paper => (
          <PaperCard key={paper.title} paper={paper} />
        ))}
      </Grid>
    </ThemeProvider>
  )
}

export default Research