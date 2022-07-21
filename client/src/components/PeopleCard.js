import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';


export default function PeopleCard({ people }) {
    return (
        <Box sx={{ maxWidth: 295, margin: 3 }}>
            <Card variant="outlined" sx={{borderRadius: 5}}>
                <CardContent>
                  <CardMedia
                    component="img"
                    image={people.image}
                    alt="NULL"
                    sx={{width: '100%', display: 'block', "marginLeft": "auto", "marginRight": "auto"}}
                  />
                  <Typography variant="h5" gutterBottom sx={{mt: 2}}>
                      {people.name}
                  </Typography>
                  <Typography variant="h6">
                      {people.programTitle}
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                      {people.program}
                  </Typography>
                  <Typography variant="body">
                      {people.detail}
                  </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}
