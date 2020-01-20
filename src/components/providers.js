import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import { CardContent, Card, IconButton, CardMedia, Button, TextField } from '@material-ui/core';
import { Schedule, Computer, ArrowForwardRounded } from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    pos: {
        marginBottom: 12,
    },
    featured: {
        borderColor: 'green',
        color: 'green'
    }
});

const Providers = ({providers}) => {

    let providersUnique = providers;
    providersUnique = providersUnique.map(provider => {
        return provider.course.provider;
    })

    providersUnique = providersUnique
    .map(provider => provider['name'])
    .map((provider, index, final) => final.indexOf(provider) === index && index)
    .filter(provider => providersUnique[provider]).map(provider => providersUnique[provider]);
    
    return (
        <Grid container alignItems="center" spacing={3}>
            {providersUnique.map((provider) => (
                <Grid item xs={10} key={provider.id}>
                    <Card variant="outlined" key={provider.id}>
                        <Grid container>
                            {provider.logoUrl != '' && 
                                <Grid item xs={4}>
                                    <CardMedia justify="center">
                                        <img src= {provider.logoUrl} 
                                            style={{height: 'auto',
                                            maxWidth: 250,
                                            width: 'auto',
                                            maxHeight: 120}}></img>
                                    </CardMedia>
                                </Grid>
                            }                            
                                <CardContent>
                                    {/* <Typography className={classes.title} color="textSecondary" gutterBottom></Typography> */}
                                    <Grid container alignItems="center">
                                        <Grid item xs>
                                            <Typography gutterBottom variant="h6">{provider.name}</Typography>
                                        </Grid>
                                    </Grid>
                                    <Typography variant="body2" color="textSecondary">
                                        {provider.website}<br></br>
                                        {provider.phone}<br></br>
                                        {provider.mailAddress.city}<br></br>
                                        {provider.mailAddress.zipCode}
                                    </Typography>
                                </CardContent>
                        </Grid>
                    </Card>
                </Grid>
            ))}
        </Grid>
    
    );

}

export default Providers;