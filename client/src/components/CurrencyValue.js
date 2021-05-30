import {
    TextField,
    FormControl
} from '@material-ui/core';

function CurrencyValue({...rest}) {
    return (
        <FormControl
            fullWidth
        >
            <TextField
                variant="outlined"
                type="number"
                {...rest}
            />
        </FormControl>
    )
}


export default CurrencyValue;