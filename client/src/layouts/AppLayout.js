import {
    Grid,
    Hidden
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        height: '100%',
        margin: 'auto',
        [theme.breakpoints.down('md')]: {
            width: '100%',
        },
        [theme.breakpoints.up('lg')]: {
            width: 'calc(100% - 256px)'
        },
    }
}))

function AppLayout() {
    const classes = useStyles();

    return (
        <Grid container spacing={3} className={classes.root}>
            <Hidden mdDown>
                <Grid item md={5}>
                    introduction
                </Grid>
            </Hidden>
            <Grid item xs={12} md={7}>
                box
            </Grid>
        </Grid>
    )
}

export default AppLayout;