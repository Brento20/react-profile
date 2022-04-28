import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import BananaLogo from "../images/banana.png";

export default function MediaCard() {
    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            height="140"
            image={BananaLogo}
            alt="RE:vamp brand logo"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            BANANA FINDER
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Banana Finder is the result of our first group project. Working with my class mates we wanted to create an application that solved the problem of ear worms, a song or lyric that gets stuck in your head but you cant remember the full song.
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small"><a href='https://fubzee.github.io/banana-finder/' target="_blank" rel="noopener noreferrer">VIEW LIVE</a></Button>
            <Button size="small"><a href='https://github.com/fubzee/banana-finder' target="_blank" rel="noopener noreferrer">VIEW CODE</a></Button>
        </CardActions>
        </Card>
    );
}