import { ThemeProvider } from '@mui/material/styles';
import theme from '../../utils/theme';
import {
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
  } from '@mui/material';


export default function TypeFilter(props) {
    const { figTypeFilter, setFigTypeFilter } = props;

    const handleRadioChange = (event) => {
        setFigTypeFilter(event.target.value);   
      };


return (
    <div>
      <ThemeProvider theme={theme}>
        <FormControl component="fieldset">
          {/* <FormLabel component="legend">View by</FormLabel> */}
          <RadioGroup
            row
            aria-label="fig-type-filter"
            name="row-radio-buttons-group"
            onChange={handleRadioChange}
            value={figTypeFilter}
            style={{ paddingLeft: 20, paddingTop: 20 }}
          >
            <FormControlLabel value="standard" control={<Radio />} label="Standard" />
            <FormControlLabel
              value="giant"
              control={<Radio />}
              label="Giant"
            />
            <FormControlLabel
              value="swap"
              control={<Radio />}
              label="Swap"
            />
            <FormControlLabel
              value="trap"
              control={<Radio />}
              label="Trap"
            />
            <FormControlLabel
              value="vehicle"
              control={<Radio />}
              label="Vehicle"
            />
            <FormControlLabel
              value="sensei"
              control={<Radio />}
              label="Sensei"
            />
            <FormControlLabel value="crystal" control={<Radio />} label="Crystal" />
            <FormControlLabel value="amiibo" control={<Radio />} label="Amiibo" />
          </RadioGroup>
        </FormControl>
      </ThemeProvider> 
    </div>
    );
}