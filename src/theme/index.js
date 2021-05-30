import { createMuiTheme } from '@material-ui/core/styles';

const font = "'Titillium Web', sans-serif"

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#292a59"
        }
    },
    typography: {
        fontFamily: font,
    }
})

export default theme;