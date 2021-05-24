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
        marginBottom: theme.spacing(3)
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
        id: 0,
        value: 0,
        type: "PLN"
    },
    {
        id: 1,
        value: 0,
        type: "EUR"
    }
]

function Converter(props) {
    const classes = useStyles();
    const [currenciesFields, setCurrenciesFields] = useState(defaultCurrenciesFields);

    function currencyAction(type) {
        let fields = currenciesFields.slice();
        const nextId = fields[fields.length-1].id + 1;
        
        if(type === "add") {
            fields.push({value: 0, type: "PLN", id: nextId});
        } else if(type === "remove") {
            fields.pop();

            if(currenciesFields.length <= 2) {
                return null;
            }
        }

        setCurrenciesFields(fields);
    }

    const handleChange = (e) => {
        let fields = currenciesFields.slice();
        const index = fields.findIndex(el => el.id.toString() === e.currentTarget.id)

        if(e.currentTarget.dataset.value) {
            fields[index].type = e.currentTarget.dataset.value;
        } else {
            fields[index].value = e.currentTarget.value;
        }

        // zaaktualizuj inne inputy

        setCurrenciesFields(fields);
        console.log(currenciesFields[index]);
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
                    <div key={i}>
                        {i <= 1 ? (
                            <Typography variant="caption">
                                {i === 0 ? 'From' : 'To'}
                            </Typography>
                        ) : null}

                        <CurrencyBox 
                            id={field.id.toString()}
                            currencies={props.currencies} 
                            field={field}
                            onChange={handleChange}
                        />
                    </div>
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