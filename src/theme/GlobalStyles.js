import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    '@global': {
        '*': {
            padding: 0,
            margin: 0,
        },
        html: {
            height: '100%'
        },
        body: {
            height: '100%',
        },
        a: {
            textDecoration: 'none',
        },
        '#root': {
            height: '100%',
            display: 'flex',
            
        }
    }
})

const GlobalStyles = () => {
    useStyles();

    return null;
}

export default GlobalStyles;