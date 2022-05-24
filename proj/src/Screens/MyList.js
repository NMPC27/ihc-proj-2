import { Component } from 'react';
import Navbar from './Navbar';
import {FilteredGameTable} from './GameTable';

import * as React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import Variables from "../variables.json";

const theme = createTheme({
    palette: {
      "All":{
        main: '#1e9b8b',
        contrastText: '#fffff',
      },
      "Playing": {
        main: '#1565c0',
        contrastText: '#fffff',
      },
      "Completed": {
        main: '#388e3c',
        contrastText: '#fff',
      },
      "On Hold": {
        main: '#fbc02d',
        contrastText: '#fff',
      },
      "Dropped": {
        main: '#d32f2f',
        contrastText: '#fff',
      },
      "Plan To Play": {
        main: '#af52bf',
        contrastText: '#fff',
      },
      "Not Played": {
        main: '#9e9e9e',
        contrastText: '#fff',
      },
    },
  });


const options = Variables.optionsList.map((option) => {
  const firstLetter = option.label.toUpperCase()[0];
  return {
    firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
    ...option,
  };
});

export default class UserPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          filtro : "All"
        }
    }

    _handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        alert(e.target.value) // e.target.value -> name of the game
      }
    }

    render (){
        return(
            <div>
                <Navbar/>
                    <Grid container spacing={1} style={{  marginTop: '0px'}}>
                        <Grid container spacing={2} style={{ marginLeft: 10, marginTop: '7px',marginBottom: '20px'}}>
                            <Grid item  xs={12} sx={{ textAlign: "center" }}>
                                <h1 style={{ marginTop: '7px', marginBottom: '7px'}}>My Game List</h1>
                            </Grid>
                            <Grid item  xs={12} sx={{ textAlign: "center" }}>
                                <ButtonGroup variant="outlined" sx ={{boxShadow: 2}} aria-label="outlined button group">
                                  <ThemeProvider theme={theme}>
                                      <Button onClick={() => {this.setState({filtro : "All"})}} color="All" variant="outlined">
                                          All
                                      </Button>
                                  </ThemeProvider>
                                  <ThemeProvider theme={theme}>
                                      <Button onClick={() => {this.setState({filtro : "Playing"})}} color="Playing" variant="outlined">
                                          Playing
                                      </Button>
                                  </ThemeProvider>
                                  <ThemeProvider theme={theme}>
                                      <Button onClick={() => {this.setState({filtro : "Completed"})}}color="Completed" variant="outlined">
                                          Completed
                                      </Button>
                                  </ThemeProvider>
                                  <ThemeProvider theme={theme}>
                                      <Button onClick={() => {this.setState({filtro : "On Hold"})}} color="On Hold" variant="outlined">
                                          On Hold
                                      </Button>
                                  </ThemeProvider>
                                  <ThemeProvider theme={theme}>
                                      <Button onClick={() => {this.setState({filtro : "Dropped"})}} color="Dropped" variant="outlined">
                                          Dropped
                                      </Button>
                                  </ThemeProvider>
                                  <ThemeProvider theme={theme}>
                                      <Button onClick={() => {this.setState({filtro : "Plan To Play"})}} color="Plan To Play" variant="outlined">
                                          Plan To Play
                                      </Button>
                                  </ThemeProvider>
                                  <Autocomplete
                                  id="grouped-demo"
                                  options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
                                  groupBy={(option) => option.firstLetter}
                                  getOptionLabel={(option) => option.label}
                                  sx={{ width: 320 }}
                                  onKeyDown={this._handleKeyDown}
                                  renderInput={(params) => <TextField {...params} label="Search" />}
                                  />
                                </ButtonGroup>
                            </Grid>
                        </Grid>
                        <Grid item xs={11}>
                          <FilteredGameTable filtro={this.state.filtro} />
                        </Grid>
                    </Grid>
            </div>
        )
    }
}
