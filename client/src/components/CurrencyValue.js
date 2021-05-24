import {
    TextField
} from '@material-ui/core';
import PropTypes from 'prop-types';

function CurrencyValue({...rest}) {
    return (
        <TextField
            fullWidth
            variant="outlined"
            type="number"
            {...rest}
        />
    )
}

CurrencyValue.propTypes = {
    
}


export default CurrencyValue;