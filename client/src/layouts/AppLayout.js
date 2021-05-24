import {
    Grid,
    Typography,
    Box,
    useMediaQuery,
    Button
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { useState, useEffect } from 'react';
import axios from 'axios';

import CurrencyBox from '../components/CurrencyBox';
import Introduction from './Introduction';

// constants
const cardPadding = 6;

const useStyles = makeStyles(theme => ({
    root: {
        margin: 'auto',
        alignItems: 'center',
        display: 'flex',
        [theme.breakpoints.down('md')]: {
            width: '100%',
            height: '100%',
        },
        [theme.breakpoints.up('lg')]: {
            width: 'calc(100% - 192px)',
            height: 'calc(100% - 128px)',
        },
    },
    medium: {
        fontWeight: 600,
    },
    subtitle: {
        marginTop: theme.spacing(2),
    },
    card: {
        border: '1px solid rgba(0,0,0,.1)',
        borderRadius: '8px',
        boxShadow: '0 6px 8px rgba(0,0,0,.075)',
        // height: `calc(100% - ${theme.spacing(cardPadding)* 2}px)`,
        padding: theme.spacing(cardPadding),
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(3)
        }
    },
    actions: {
        marginTop: theme.spacing(3),
    },
    actionsRemove: {
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

function AppLayout() {
    const classes = useStyles();
    const theme = useTheme();
    const [currencies, setCurrencies] = useState([]);
    const [currenciesFields, setCurrenciesFields] = useState(defaultCurrenciesFields);
    const [loading, setLoading] = useState(true);

    const isMobile = useMediaQuery(theme.breakpoints.down('md'), {
        defaultMatches: true,
    })

    useEffect(() => {
        const CURRENCIES_LIST = "https://free.currconv.com/api/v7/currencies?apiKey=237b33afb61f2bcfe213"
        axios.get(CURRENCIES_LIST).then(res => {
            setCurrencies(res.data.results);
            setLoading(false);
        })
    }, []);

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

    // render
    if(loading) {
        return (
            <p>loading... please wait</p>
        )
    }
    return (
        <Grid container spacing={isMobile ? 2 : 10} className={classes.root}>
            <Introduction/>
            <Grid item xs={12} lg={6}>
                <Box className={classes.card}>
                    <Typography variant="h5" color="primary" className={classes.medium}>
                        How our converter works?
                    </Typography>

                    <Typography variant="body1" className={classes.subtitle}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Next we use some API when you typing your exchange value!
                    </Typography>

                    {currenciesFields.map((field, i) => (
                        <CurrencyBox key={i} currencies={currencies} field={field}/>
                    ))}

                    <Box className={classes.actions}>
                        <Button color="primary" variant="outlined" onClick={() => currencyAction('add')}>
                            Add currency
                        </Button>

                        <Button className={classes.actionsRemove} color="secondary" variant="outlined" disabled={currenciesFields.length <= 2} onClick={() => currencyAction("remove")}>
                            Remove last
                        </Button>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}

export default AppLayout;