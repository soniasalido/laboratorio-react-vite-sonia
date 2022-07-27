import { Grid, Typography } from '@mui/material';


export const MembersLayout = ({ children, title = '' }) => {
    return (
        <Grid
            container
            spacing={2}
            sx={{ minHeight: '100vh', backgroundColor: 'tertiary.main', padding: 4 }}
        >

            { children }
        </Grid>

    )
}