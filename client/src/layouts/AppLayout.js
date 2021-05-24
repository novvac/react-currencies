import {
    Grid,
    Hidden,
    Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

// lottie
import LottieControl from '../components/LottieControl';
import bloggingAnimation from '../data/animations/blogging.json'

const useStyles = makeStyles(theme => ({
    root: {
        margin: 'auto',
        [theme.breakpoints.down('md')]: {
            width: '100%',
            height: 'calc(100% - 64px)',
        },
        [theme.breakpoints.up('lg')]: {
            width: 'calc(100% - 256px)',
            height: 'calc(100% - 192px)',
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
    introductionSubtitle: {
        marginTop: theme.spacing(2),
    },
    introductionWrapper: {
        marginBottom: theme.spacing(4)
    }
}))

function AppLayout() {
    const classes = useStyles();

    return (
        <Grid container spacing={3} className={classes.root}>
            <Hidden mdDown>
                <Grid item md={6} className={classes.introduction}>
                    <div className={classes.introductionWrapper}>
                        <Typography variant="h3" color="primary" className={classes.medium}>
                            Currency Exchange
                        </Typography>
                        <Typography variant="h6" className={classes.introductionSubtitle}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500
                        </Typography>
                    </div>

                    <LottieControl data={bloggingAnimation}/>
                </Grid>
            </Hidden>
            <Grid item xs={12} md={6}>
                box
            </Grid>
        </Grid>
    )
}

export default AppLayout;