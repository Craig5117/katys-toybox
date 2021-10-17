import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function AppTheme () {
    const theme = createTheme({
        palette: {
          primary: {
            main: '#610061',
          },
          secondary: {
            // This is green.A700 as hex.
            main: '#11cb5f',
          },
        },
      });

    
}