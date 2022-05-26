import { Component } from 'react';
import Navbar from './Navbar';

import * as React from 'react';
import Grid from '@mui/material/Grid';

import {NormalGameTable} from './GameTable';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';

import Variables from "../variables.json";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#FFFFFF',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const Search2 = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(0),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '100%',
        '&:focus': {
          width: '100%',
        },
      },
    },
  }));

export default class Search extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            topGames:Variables.topGames,
            search:'ERROR'
          };

        }
    
        _handleKeyDown = (e) => {
            if (e.key === 'Enter') {
                alert(e.target.value) // e.target.value -> name of the game
            }
        }

        getStateFromLocalStorage = () => { 
            let data = localStorage.getItem('Search'); 
            console.log(data);
            if(data !== null) {
              this.setState({search : data})
            }else{
              alert("Error getting data from local storage");
            }
        }

        componentDidMount() { 
            // Fetch data from local storage 
            this.getStateFromLocalStorage(); 
            console.log("Component mounted");
          } 

    render(){
        return (  
            <div>
                <Navbar/>
                
                <Grid container spacing={2} style={{ marginLeft: 10, marginTop: '7px',marginBottom: '20px'}}>
                    <Grid item  xs={12} sx={{ textAlign: "Left" }}>
                        <h1 style={{ marginTop: '7px', marginBottom: '7px'}}>Search Games</h1>
                    </Grid>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={6}>
                        <Box
                            sx={{
                                backgroundColor: '#1976D2',
                            }}
                        >
                            <Search2>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                placeholder= {'Search Results for "' + this.state.search + '"' }
                                inputProps={{ 'aria-label': 'search' }}
                                style={{ width: '100%' }}
                                onKeyDown={this._handleKeyDown}
                                />
                            </Search2>
                        </Box>
                    </Grid>
                    <Grid item xs={3}></Grid>
                </Grid>
                
                <Grid container spacing={5} style={{  marginTop: '0px'}}>
                    <Grid item xs={11}>
                        <NormalGameTable/>
                    </Grid>
                </Grid>

 
            </div>
        );

    }
}