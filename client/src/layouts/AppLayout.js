import {
    Grid,
    Hidden,
    Typography,
    Box,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

// lottie
import LottieControl from '../components/LottieControl';
import bloggingAnimation from '../data/animations/blogging.json'

import NumberField from '../components/NumberField';
import SelectField from '../components/SelectField';

// constants
const cardPadding = 6;

const useStyles = makeStyles(theme => ({
    root: {
        margin: 'auto',
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            width: '100%',
            height: 'calc(100% - 32px)',
        },
        [theme.breakpoints.up('lg')]: {
            width: 'calc(100% - 192px)',
            height: 'calc(100% - 128px)',
        },
    },
    medium: {
        fontWeight: 600,
    },
    introduction: {
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    subtitle: {
        marginTop: theme.spacing(2),
    },
    introductionWrapper: {
        marginBottom: theme.spacing(4)
    },
    card: {
        border: '1px solid rgba(0,0,0,.1)',
        borderRadius: '8px',
        boxShadow: '0 6px 8px rgba(0,0,0,.075)',
        // height: `calc(100% - ${theme.spacing(cardPadding)* 2}px)`,
        padding: theme.spacing(cardPadding),
    }
}))

function AppLayout() {
    const classes = useStyles();

    return (
        <Grid container spacing={10} className={classes.root}>
            <Hidden mdDown>
                <Grid item lg={6} className={classes.introduction}>
                    <div className={classes.introductionWrapper}>
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
            <Grid item xs={12} lg={6}>
                <Box className={classes.card}>
                    <Typography variant="h5" color="primary" className={classes.medium}>
                        How our converter works?
                    </Typography>

                    <Typography variant="body1" className={classes.subtitle}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Next we use some API when you typing your exchange value!
                    </Typography>

                    <Grid container className={classes.subtitle} spacing={3}>
                        <Grid item xs={6}>
                            <NumberField/>
                        </Grid>

                        <Grid item xs={6}>
                            <SelectField/>
                        </Grid>
                    </Grid>

                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <NumberField/>
                        </Grid>

                        <Grid item xs={6}>
                            <SelectField/>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    )
}

export default AppLayout;