import {
    Grid,
    Hidden,
    Typography,
    Box,
    useMediaQuery,
    Button
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { useState, useEffect } from 'react';
import axios from 'axios';

// lottie
import LottieControl from '../components/LottieControl';
import bloggingAnimation from '../data/animations/blogging.json'

import CurrencyBox from '../components/CurrencyBox';

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
    introduction: {
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    subtitle: {
        marginTop: theme.spacing(2),
    },
    introductionWrapper: {
        marginBottom: theme.spacing(4)
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

const currenciesFields = [
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
    const [loading, setLoading] = useState(true);

    const isMobile = useMediaQuery(theme.breakpoints.down('md'), {
        defaultMatches: true,
    })

    useEffect(() => {
        const CURRENCIES_URL = "https://free.currconv.com/api/v7/currencies?apiKey=237b33afb61f2bcfe213"
        axios.get(CURRENCIES_URL).then(res => {
            setCurrencies(res.data.results);
            setLoading(false);
        })
    }, []);


    // render
    if(loading) {
        return (
            <p>loading... please wait</p>
        )
    }
    return (
        <Grid container spacing={isMobile ? 2 : 10} className={classes.root}>
            <Hidden mdDown>
                <Grid item lg={6} className={classes.introduction}>
                    <div className={classes.introductionWrapper}>
                        <Typography variant="h3" color="primary" className={classes.medium}>
                            Currency Calculator
                        </Typography>
                        <Typography variant="h6" className={classes.subtitle}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500
                        </Typography>
                    </div>

                    <LottieControl data={bloggingAnimation}/>
                </Grid>
            </Hidden>
            <Grid item xs={12} lg={6}>
                <Box className={classes.card}>
                    <Typography variant="h5" color="primary" className={classes.medium}>
                        How our converter works?
                    </Typography>

                    <Typography variant="body1" className={classes.subtitle}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Next we use some API when you typing your exchange value!
                    </Typography>

                    {currenciesFields.map(field => {
                        return (
                            <CurrencyBox currencies={currencies}/>
                        )
                    })}

                    <Box className={classes.actions}>
                        <Button color="primary" variant="outlined">
                            Add currency
                        </Button>

                        <Button className={classes.actionsRemove} color="secondary" variant="outlined" disabled={currenciesFields.length <= 2}>
                            Remove last
                        </Button>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}

export default AppLayout;