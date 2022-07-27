import {Grid, Toolbar, Typography} from '@mui/material';
import { Box } from '@mui/system'


const drawerWidth = 280;

export const AppLayout = ({ children }) => {
    return (
       <Grid
            container
            spacing={2}
            sx={{ minHeight: '100vh', backgroundColor: 'secondary.main', padding: 4 }}
        >

           { children }
        </Grid>
    )
}