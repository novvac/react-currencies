import {
    TextField
} from '@material-ui/core';

function NumberField() {
    return (
        <TextField
            fullWidth
            label="Value"
            variant="outlined"
            type="number"
        />
    )
}

export default NumberField;