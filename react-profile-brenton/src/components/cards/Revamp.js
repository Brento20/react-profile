import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import ReVampLogo from "../images/revamp.png";

export default function MediaCard() {
    return (
    <Card sx={{ maxWidth: 345, minWidth: 250}}>
        <CardMedia
            component="img"
            height="140"
            image={ReVampLogo}
            alt="RE:vamp brand logo"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            RE:Vamp
            </Typography>
            <Typography variant="body2" color="text.secondary" textAlign="justify">
            RE:vamp was a group project that I was lucky enough to project manage, we focused on empowering our users to build, repair and improve everyday things in there lives. We used a combination of NPM packages to build the server side of this app including express.js and sequelize to manage our routes, handlebars to compile the templates and nodemailer to send confirmation emails when a user submits tips to the database.
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small"><a href='https://revampyourlife.herokuapp.com/' target="_blank" rel="noopener noreferrer">VIEW LIVE</a></Button>
            <Button size="small"><a href='https://github.com/Brento20/revamp' target="_blank" rel="noopener noreferrer">VIEW CODE</a></Button>
        </CardActions>
        </Card>
    );
}