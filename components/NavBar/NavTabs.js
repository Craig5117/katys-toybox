import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { purple } from '@mui/material/colors';
export default function NavTabs(props) {
  const { setShowFigures, setShowAcc, setCurrentPage, setSearchType, setSearchTerm } = props;
  const [value, setValue] = useState('figures');

  useEffect(() => {
    switch (value) {
      case 'figures':
        setShowFigures(true);
        setShowAcc(false);
        break;
      case 'acc':
        setShowFigures(false);
        setShowAcc(true);
        break;
    }
    setCurrentPage(1);
    setSearchType('none');
    setSearchTerm('');
  }, [value]);

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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: '100%'}}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
          aria-label="secondary tabs example"
        >
          <Tab value="figures" label="Figures" />
          <Tab value="acc" label="Accessories" />
        </Tabs>
      </Box>
    </ThemeProvider>
  );
}
