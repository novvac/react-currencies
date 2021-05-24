import {
    Grid,
    useMediaQuery,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { useState, useEffect } from 'react';
import axios from 'axios';

import Introduction from './Introduction';
import Converter from './Converter';

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
}))

function AppLayout() {
    const classes = useStyles();
    const theme = useTheme();
    const [currencies, setCurrencies] = useState([]);
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

    // render
    if(loading) {
        return (
            <p>loading... please wait</p>
        )
    }
    return (
        <Grid container spacing={isMobile ? 2 : 10} className={classes.root}>
            <Introduction/>
            <Converter currencies={currencies}/>
        </Grid>
    )
}

export default AppLayout;