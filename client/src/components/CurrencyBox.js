import {
    Grid
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CurrencyValue from './CurrencyValue';
import CurrencyType from './CurrencyType';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(1),
    }
}))

function CurrencyBox(props) {
    const classes = useStyles();

    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={6}>
                <CurrencyValue/>
            </Grid>
            <Grid item xs={6}>
                <CurrencyType currencies={props.currencies}/>
            </Grid>
        </Grid>
    )
}

export default CurrencyBox;