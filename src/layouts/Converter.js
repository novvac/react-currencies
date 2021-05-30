import {
    Grid,
    Box,
    Typography,
    Button
} from '@material-ui/core'
import CurrencyBox from '../components/CurrencyBox';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import axios from 'axios';
import keys from '../config/keys';
import { toast } from 'react-toastify';

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
        marginBottom: theme.spacing(3)
    },
    buttons: {
        marginTop: theme.spacing(3),
    },
    buttonRemove: {
        marginLeft: theme.spacing(2),
    }
}))

function Converter(props) {
    const classes = useStyles();
    const [currencyFields, setCurrencyFields] = useState([{type: "PLN"},{type: "EUR"}]);
    const [currencyCached, setCurrencyCached] = useState([]);

    function handleAction(type) {
        let fields = currencyFields.slice();

        if(type === "add") {
            fields.push({type: "PLN"});
        } else if(type === "remove") {
            fields.pop();

            if(currencyFields.length <= 2) {
                return null;
            }
        }

        setCurrencyFields(fields);
    }

    const handleChange = (e) => {
        const target = e.currentTarget;
        const targetId = target.id.slice(5, target.id.length);
        const targetType = target.id.slice(0, 5);
        const targetValue = target.value;
        console.clear();

        if(targetType === "genre") {
            const currencyFieldsClone = currencyFields.slice();
            currencyFieldsClone[targetId].type = target.dataset.value;
            setCurrencyFields(currencyFieldsClone);

            if(parseInt(targetId) === 0) {
                const inputValue = document.getElementById(`input${targetId}`).value;
                updateInputs(targetId, inputValue);
            } else {
                const fromInputValue = document.getElementById('input0').value;
                const fromInputType = currencyFields[0].type;

                const input = document.getElementById(`input${targetId}`);

                const cached = getCurrencyCached(fromInputType, currencyFields[targetId].type)
                if(!cached) {
                    addCurrencyCached(fromInputType, currencyFields[targetId].type).then(res => {
                        input.value = (fromInputValue * res).toFixed(2);
                    })
                } else {
                    input.value = (fromInputValue * cached).toFixed(2);
                }
            }
        } else {
            updateInputs(targetId, targetValue)
        }
    }

    function getCurrencyCached(from, to) {
        let founded = currencyCached.find(el => {
            if(el.from === from && el.to === to)
                return el;
        })

        if(founded)
            return founded.val;
            
        return undefined;
    }

    async function addCurrencyCached(from, to) {
        const URL = `https://free.currconv.com/api/v7/convert?apiKey=${keys.currencyApi}&q=${from}_${to}&compact=y`
        return await axios.get(URL).then(res => {
            if(!getCurrencyCached(from, to)) {
                let newCached = currencyCached.slice();
                const val = res.data[`${from}_${to}`].val

                newCached.push({ from, to, val })
                setCurrencyCached(newCached)
                return val;
            }
        }).catch(err => {
            toast.error("Podczas ładowania zasobów wystąpił nieznany problem! Spróbuj poźniej, a jeżeli problem nie zostanie rozwiązany skontaktuj się z administracją!", {autoClose: 7500})
        })
    }

    function updateInputs(targetId, targetValue, ...rest) {
        const inputs = document.querySelectorAll('input.MuiInputBase-input');
        const fromCurrency = currencyFields[targetId].type;
        
        inputs.forEach(input => {
            const inputId = input.id.slice(5, input.id.length);

            if(inputId !== targetId) {
                const toCurrency = currencyFields[inputId].type;
                const exchangeVal = getCurrencyCached(fromCurrency, toCurrency)
                if(exchangeVal) {
                    input.value = (targetValue * exchangeVal).toFixed(2);
                } else {
                    addCurrencyCached(fromCurrency, toCurrency).then(res => {
                        input.value = (targetValue * res).toFixed(2);
                    })
                }
            }
        });
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

                {currencyFields.map((field, i) => (
                    <div key={i}>
                        {i <= 1 ? (
                            <Typography variant="caption">
                                {i === 0 ? 'From' : 'To'}
                            </Typography>
                        ) : null}

                        <CurrencyBox    
                            id={i}
                            currencyList={props.currencyList} 
                            field={field}
                            onChange={handleChange}
                        />
                    </div>
                ))}

                <Box className={classes.buttons}>
                    <Button color="primary" variant="outlined" onClick={() => handleAction('add')}>
                        Add currency
                    </Button>

                    <Button className={classes.buttonRemove} color="secondary" variant="outlined" disabled={currencyFields.length <= 2} onClick={() => handleAction("remove")}>
                        Remove last
                    </Button>
                </Box>
            </Box>
        </Grid>
    )
}

export default Converter;