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

function CurrencyType({currencies, defaultType, ...rest}) { 
    const classes = useStyles();
    const [type, setType] = useState(defaultType)

    const handleClick = (e) => {
        setType(e.currentTarget.dataset.value);
    }

    return (
        <FormControl
            variant="outlined"
            size="small"
            fullWidth
        >
            <Select value={type}>
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

CurrencyType.propTypes = {
    currencies: PropTypes.object.isRequired,
    defaultType: PropTypes.string.isRequired,
}

export default CurrencyType;