import {useState} from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

export default function Search({performSearch,label="Search here"}) {

    const [searchText,setSearch] = useState('')
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400,margin:'1rem' }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={label}
        inputProps={{ 'aria-label': 'Search Contracts',"data-testid": "search-input" }}
        
        onChange={(e)=>{
            setSearch(e.target.value);
        }}
      />
      <IconButton onClick={()=>performSearch(searchText)} type="button" sx={{ p: '10px' }} aria-label="search"  data-testid="search-button">
        <SearchIcon/>
      </IconButton>
    </Paper>
  );
}