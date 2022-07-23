import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import logo from '../images/UBC-logo-2018-narrowsig-blue-rgb72.png'

export default function ProgramCard({name, details, href}) {
    const handleOnClick = () => {
        window.open(href, '_blank');
    }
    return (
        <Card sx={{maxWidth: '90%', mx: 'auto', my: 2, borderRadius: 3}}>
        <CardActionArea onClick={handleOnClick}>
            {/* <CardMedia
            component="img"
            height="140"
            image={logo}
            alt="green iguana"
            /> */}
            <CardContent>
            <Typography gutterBottom variant="h5" component="div" >
                {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {details}
            </Typography>
            </CardContent>
        </CardActionArea>
        {/* <CardActions>
            <Button size="small" color="primary">
            Share
            </Button>
        </CardActions> */}
        </Card>
    );
}