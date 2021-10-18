import { ThemeProvider, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import theme from '../../utils/theme';
import buttonStyles from '../../styles/Button.module.css';
import searchStyles from '../../styles/SearchBar.module.css'

export default function SearchBar(props) {
  // function myHandleSearch() {
  //     handleSearch();
  // }
  // function myHandleChange() {
  //     handleChange();
  // }

  return (
    <form onSubmit={props.handleSearch} className={searchStyles.searchBarForm}>
      <ThemeProvider theme={theme}>
        <div style={{display: "flex", alignItems:"center"}}>

        
        <TextField
          id="outlined-basic"
          label={props.placeholder}
          variant="outlined"
          value={props.searchTerm}
          onChange={props.handleChange}
          size="small"
          style={{verticalAlign:"middle"}}
        />
        {/* <input
        type="text"
        placeholder="search for a figure"
        value={props.searchTerm}
        onChange={props.handleChange}
      /> */}
        <button type="submit" className={buttonStyles.btn} style={{padding: "9.8px 14px", fontSize:"inherit", marginLeft: "1em", verticalAlign:"middle"}}>Search</button>
        </div>
      </ThemeProvider>
    </form>
  );
}
