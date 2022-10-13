import {createTheme} from '@mui/material/styles';
import {red} from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: '#3F3D55',
        },
        secondary: {
            main: '#0c1234',
        },
        error: {
            main: red.A400,
        },
    },
});

export default theme;
