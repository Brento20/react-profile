import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Logo from "../images/weather.png";

export default function MediaCard() {
    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            height="140"
            image={Logo}
            alt="RE:vamp brand logo"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Weather API
            </Typography>
            <Typography variant="body2" color="text.secondary">
            This application runs using JavaScript and the One-call Open Weather API.

While putting this together I wanted to create a mobile style card that visually looked clean and simple, and gave the impression that it was a swipe-able widget.
            </Typography>
        </CardContent>
        <CardActions>
        <Button size="small"><a href='https://brento20.github.io/WeatherApp/' target="_blank" rel="noopener noreferrer">VIEW LIVE</a></Button>
            <Button size="small"><a href='https://github.com/Brento20/WeatherApp' target="_blank" rel="noopener noreferrer">VIEW CODE</a></Button>
        </CardActions>
        </Card>
    );
}