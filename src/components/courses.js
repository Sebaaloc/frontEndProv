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

const Courses = ({courses}) => {
    const classes = useStyles();
    let totalHours = 0;
    return (
        <Grid container alignItems="center" spacing={3}>
            {courses.map((course) => {
                totalHours = 0;
                course.course.components.forEach(component => {
                    totalHours += component.profession.totalHours;
                })
                return (
                    <Grid item xs={10} key={course.id}>
                        <Card variant="outlined" key={course.id}>
                            <Grid container>
                                {course.course.featuredBanner != '' && 
                                    <Grid item xs={4}>
                                        <CardMedia justify="center">
                                            <img src= {"https://storage.cebroker.com/CEBroker/" +course.course.featuredBanner} 
                                                style={{height: 'auto',
                                                maxWidth: 250,
                                                width: 'auto',
                                                maxHeight: 120}}></img>
                                        </CardMedia>
                                    </Grid>
                                }
                                
                                <Grid item xs={course.course.featuredBanner != '' ? 8 : 12}>
                                    <CardContent>
                                        {/* <Typography className={classes.title} color="textSecondary" gutterBottom></Typography> */}
                                        <Grid container alignItems="center">
                                            <Grid item xs>
                                                <Typography gutterBottom variant="h6">{course.course.name}</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography gutterBottom variant="h6">${course.price}</Typography>
                                            </Grid>
                                        </Grid>
                                        {course.course.featuredBanner != '' && 
                                            <Button size="small" variant="outlined" className={classes.featured}>
                                                Featured
                                            </Button>
                                        }
                                        <Typography variant="body2" color="textSecondary">
                                            {course.course.name}<br></br>
                                            {course.course.provider.name}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                        <Grid container alignItems="center">
                                            <Grid item xs>
                                                <IconButton aria-label="Course duration" size="small">
                                                    <Schedule />
                                                </IconButton> {totalHours + " hours"}
                                                <IconButton aria-label="Delivery method" size="small">
                                                    <Computer />
                                                </IconButton> {course.course.deliveryMethod.description}
                                            </Grid>
                                            <Grid item>
                                                <Button size="small" variant="outlined">
                                                    <ArrowForwardRounded />
                                                </Button>
                                            </Grid>
                                        </Grid>
                                        </Typography>
                                    </CardContent>
                                </Grid> 
                            </Grid>
                        </Card>
                    </Grid>
                )
            })}
        </Grid>
    );
}

export default Courses;