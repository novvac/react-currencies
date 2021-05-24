import {
    TextField
} from '@material-ui/core';

function NumberField() {
    return (
        <TextField
            fullWidth
            label="Value"
            variant="outlined"
            size="small"
            type="number"
        />
    )
}

export default NumberField;