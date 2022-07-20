import * as React from 'react';
import { Button, CardActionArea, CardMedia } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import Grow from '@mui/material/Grow';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function PaperCard({ paper }) {
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Box sx={{ minWidth: 275, margin: 5 }}>
            <Card variant="outlined" sx={{borderRadius: 5}}>
                <CardActionArea 
                onClick={handleExpandClick}>
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        {paper.title}
                    </Typography>
                    <Typography variant="body">
                        {paper.authors}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic', mt:1 }}>
                        {paper.journal}
                    </Typography>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="View More"
                >
                </ExpandMore>
                </CardContent>
                </CardActionArea>
                <Dialog 
                open={expanded} 
                onClose={handleExpandClick} 
                maxWidth={'xl'} 
                TransitionComponent={Grow} 
                PaperProps={{
                    style: { borderRadius: 10 }
                }}>
                    <CardContent>
                        <Typography variant="h6" gutterBottom sx={{mt:1}}>
                            {paper.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {paper.authors}
                        </Typography>
                        <Typography variant="h6" gutterBottom sx={{mt: 2}}>
                            Abstract:
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {paper.abstract}
                        </Typography>
                        {/* <CardMedia
                        component="img"
                        image={paper.fig}
                        alt="green iguana"
                        sx={{mt: 2}}
                        /> */}
                            <CardActions disableSpacing>
                                <Button 
                                onClick={() => {
                                    window.open(paper.doi, '_blank');
                                }
                                }>
                                    Paper
                                </Button>
                                {paper.codeLink !== undefined ? <Button
                                onClick={() => {
                                    window.open(paper.codeLink, '_blank');
                                }}>
                                    Code
                                </Button> : null}
                                <ExpandMore
                                    expand={expanded}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="View less"
                                >
                                    <ArrowForwardIcon />
                                </ExpandMore>
                            </CardActions>
                    </CardContent>
                </Dialog>
            </Card>
        </Box>
    );
}
