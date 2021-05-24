import {
    Grid
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CurrencyValue from './CurrencyValue';
import CurrencyType from './CurrencyType';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(1),
    }
}))

function CurrencyBox({currencies, field, ...rest}) {
    const classes = useStyles();
    console.log(field);

    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={6}>
                <CurrencyValue value={field.value}/>
            </Grid>
            <Grid item xs={6}>
                <CurrencyType defaultType={field.type} currencies={currencies}/>
            </Grid>
        </Grid>
    )
}

CurrencyBox.propTypes = {
    currencies: PropTypes.object.isRequired,
    field: PropTypes.object.isRequired,
}

export default CurrencyBox;