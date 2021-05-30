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

function CurrencyType({currencyList, defaultType, ...rest}) { 
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
            <Select value={type} onChange={rest.onChange}>
                {Object.values(currencyList).map(el => {
                    return (
                        <MenuItem
                            key={el.id} 
                            value={el.id} 
                            onClick={handleClick}
                            id={rest.id}
                            className={classes.menuItem}
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
    currencyList: PropTypes.object.isRequired,
    defaultType: PropTypes.string.isRequired,
}

export default CurrencyType;