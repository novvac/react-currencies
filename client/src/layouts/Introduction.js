import {
    Hidden,
    Grid,
    Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import LottieControl from '../components/LottieControl';
import bloggingAnimation from '../data/animations/blogging.json';

const useStyles = makeStyles(theme => ({
    root: {

    },
    title: {

    }
}))

function Introduction() {
    const classes = useStyles();

    return (
        <Hidden mdDown>
            <Grid item lg={6} className={classes.root}>
                <div className={classes.title}>
                    <Typography variant="h3" color="primary" className={classes.medium}>
                        Currency Calculator
                    </Typography>
                    <Typography variant="h6" className={classes.subtitle}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500
                    </Typography>
                </div>

                <LottieControl data={bloggingAnimation}/>
            </Grid>
        </Hidden>
    )
}

export default Introduction;