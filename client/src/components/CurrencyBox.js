import {
    Grid
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CurrencyValue from './CurrencyValue';
import CurrencyType from './CurrencyType';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing(1),
    }
}))

function CurrencyBox({currencyList, field, id, ...rest}) {
    const classes = useStyles();

    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={6}>
                <CurrencyValue id={'input' + id} onChange={rest.onChange}/>
            </Grid>
            <Grid item xs={6}>
                <CurrencyType id={'genre' + id} defaultType={field.type} currencyList={currencyList} onChange={rest.onChange}/>
            </Grid>
        </Grid>
    )
}

CurrencyBox.propTypes = {
    currencyList: PropTypes.object.isRequired,
    field: PropTypes.object.isRequired,
}

export default CurrencyBox;