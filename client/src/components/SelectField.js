import {
    Select,
    MenuItem,
    FormControl
} from '@material-ui/core'

function SelectField() {
    return (
        <FormControl
            variant="outlined"
            size="small"
            fullWidth
        >
            <Select>
                {/* menu items here */}
            </Select>
        </FormControl>
    )
}

export default SelectField;