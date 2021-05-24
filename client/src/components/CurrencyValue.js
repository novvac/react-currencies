import {
    TextField
} from '@material-ui/core';

function CurrencyValue() {
    return (
        <TextField
            fullWidth
            label="Value"
            variant="outlined"
            type="number"
        />
    )
}

export default CurrencyValue;