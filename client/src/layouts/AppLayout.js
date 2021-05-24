import {
    Grid,
    Hidden
} from '@material-ui/core';

function AppLayout() {
    return (
        <Grid container spacing={3}>
            <Hidden mdDown>
                <Grid item md={5}>
                    introduction
                </Grid>
            </Hidden>
            <Grid item xs={12} md={7}>
                box
            </Grid>
        </Grid>
    )
}

export default AppLayout;