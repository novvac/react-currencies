import {
    TextField
} from '@material-ui/core';
import PropTypes from 'prop-types';

function CurrencyValue({value, ...rest}) {
    return (
        <TextField
            fullWidth
            variant="outlined"
            type="number"
            value={value}
        />
    )
}

CurrencyValue.propTypes = {
    value: PropTypes.number.isRequired,
}


export default CurrencyValue;