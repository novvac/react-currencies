import {
    Grid,
    Box,
    Typography,
    Button
} from '@material-ui/core'
import CurrencyBox from '../components/CurrencyBox';
import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from 'react';

const useStyles = makeStyles(theme => ({
    root: {
        border: '1px solid rgba(0,0,0,.1)',
        borderRadius: '8px',
        boxShadow: '0 6px 8px rgba(0,0,0,.075)',
        // height: `calc(100% - ${theme.spacing(cardPadding)* 2}px)`,
        padding: theme.spacing(6),
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(3)
        }
    },
    medium: {
        fontWeight: 600,
    },
    subtitle: {
        marginTop: theme.spacing(2),
    },
    buttons: {
        marginTop: theme.spacing(3),
    },
    buttonRemove: {
        marginLeft: theme.spacing(2),
    }
}))

const defaultCurrenciesFields = [
    {
        value: 0,
        type: "PLN"
    },
    {
        value: 0,
        type: "EUR"
    }
]

function Converter(props) {
    const classes = useStyles();
    const [currenciesFields, setCurrenciesFields] = useState(defaultCurrenciesFields);

    function currencyAction(type) {
        let fields = currenciesFields.slice();
        
        if(type === "add") {
            fields.push({value: 0, type: "PLN"});
        } else if(type === "remove") {
            fields.pop();

            if(currenciesFields.length <= 2) {
                return null;
            }
        }

        setCurrenciesFields(fields);
    }

    return (
        <Grid item xs={12} lg={6}>
            <Box className={classes.root}>
                <Typography variant="h5" color="primary" className={classes.medium}>
                    How our converter works?
                </Typography>

                <Typography variant="body1" className={classes.subtitle}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Next we use some API when you typing your exchange value!
                </Typography>

                {currenciesFields.map((field, i) => (
                    <CurrencyBox key={i} currencies={props.currencies} field={field}/>
                ))}

                <Box className={classes.buttons}>
                    <Button color="primary" variant="outlined" onClick={() => currencyAction('add')}>
                        Add currency
                    </Button>

                    <Button className={classes.buttonRemove} color="secondary" variant="outlined" disabled={currenciesFields.length <= 2} onClick={() => currencyAction("remove")}>
                        Remove last
                    </Button>
                </Box>
            </Box>
        </Grid>
    )
}

export default Converter;