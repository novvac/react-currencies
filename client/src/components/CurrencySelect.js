import {
    Select,
    MenuItem,
    FormControl,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useState } from 'react';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
    menuItem: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingRight: theme.spacing(4)
    }
}))

function CurrencySelect({currencies, defaultValue="PLN", ...rest}) { 
    const classes = useStyles();
    const [value, setValue] = useState("PLN")

    const handleClick = (e) => {
        setValue(e.currentTarget.dataset.value);
    }

    return (
        <FormControl
            variant="outlined"
            size="small"
            fullWidth
        >
            <Select value={value}>
                {Object.values(currencies).map(el => {
                    return (
                        <MenuItem 
                            key={el.id} 
                            value={el.id} 
                            className={classes.menuItem}
                            onClick={handleClick}
                        >
                            <div>
                                {el.currencyName}
                            </div>

                            <div>
                                {el.id}
                            </div>
                        </MenuItem>
                    )
                })}
            </Select>
        </FormControl>
    )
}

CurrencySelect.propTypes = {
    currencies: PropTypes.object.isRequired,
    defaultValue: PropTypes.string
}

export default CurrencySelect;