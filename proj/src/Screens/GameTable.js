import { Component } from 'react';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import TextField from '@mui/material/TextField';

import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


import Variables from "../variables.json";


const statusColors = [
    {
      id: 'Playing',
      color: '#1565c0',
    },
    {
      id: 'Completed',
      color: '#388e3c',
    },
    {
      id: 'On Hold',
      color: '#fbc02d',
    },
    {
      id: 'Dropped',
      color: '#d32f2f',
    },
    {
      id: 'Plan To Play',
      color: '#af52bf',
    },
    {
      id: 'Not played',
      color: '#9e9e9e',
    },
  ];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#32527b",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));


const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

class FilteredGameTable extends Component {
    saveStateToLocalStorage = () => { 
      localStorage.setItem('Games', JSON.stringify(this.state.topGames)); 
      console.log("Saved to local storage");
    }

    // Fetch data from local storage 
    getStateFromLocalStorage = () => { 
      let data = localStorage.getItem('Games'); 
      console.log(data);
      if(data !== null) {
        this.setState({topGames:JSON.parse(data)}); 
      }else{
        this.saveStateToLocalStorage();
      }
    }

    componentDidMount() { 
      // Fetch data from local storage 
      this.getStateFromLocalStorage(); 
      console.log("Component mounted");
    } 

    constructor(props) {
        super(props);
        this.state = {
          "topGames" : Variables.topGames
        };
      }

    render(){
        return (
          <div>
            <TableContainer sx={{ marginLeft: '4%'}} component={Paper}>
              <Table aria-label="customized table">
                <TableHead>
                  <TableRow key="Rank">
                    <StyledTableCell align="left" sx={{width: '1%'}} ></StyledTableCell>
                    <StyledTableCell align="center" >Rank</StyledTableCell>
                    <StyledTableCell align="center">Art</StyledTableCell>
                    <StyledTableCell align="center">Title</StyledTableCell>
                    <StyledTableCell align="center">Year</StyledTableCell>
                    <StyledTableCell align="center">Score</StyledTableCell>
                    <StyledTableCell align="center">Your Score</StyledTableCell>
                    <StyledTableCell align="center">Status</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.topGames.filter(game => this.props.filtro==="All" ? game.status!== "Not played" : game.status===this.props.filtro).filter(game => this.props.game==="" ? game : game.title.includes(this.props.game)).map((val, index) => {
                    return (
                        <StyledTableRow key={val.rank}>
                          {statusColors.filter(color => color.id === val.status).map(filteredColor => (
                            <TableCell scope="row" sx={{backgroundColor: filteredColor.color }}></TableCell>
                          ))}
                          <StyledTableCell align="center" scope="row">{val.rank}</StyledTableCell>
                          <StyledTableCell align="center" scope="row" onClick={() => { alert(val.title) }} sx={{'&:hover': {backgroundColor: 'D3D3D3',opacity: [0.9, 0.8, 0.7]},justifyContent: "center", display: "flex"}}><CardHeader  avatar={<Avatar sx={{ width: 80, height: 80,boxShadow: 3}} variant="rounded" alt="Game Icon" src={val.art}/>}/></StyledTableCell>
                          <StyledTableCell onClick={() => { alert(val.title) }} sx={{'&:hover': {backgroundColor: 'D3D3D3',opacity: [0.9, 0.8, 0.7]}}} align="center"><h3>{val.title}</h3></StyledTableCell>
                          <StyledTableCell align="center">{val.year}</StyledTableCell>
                          <StyledTableCell align="center">{val.score}</StyledTableCell>
                          <StyledTableCell align="center">
                            <TextField
                              id="filled-number"
                              label="Your Score"
                              type="number"
                              value={val.yourScore}
                              defaultValue={val.yourScore}
                              InputLabelProps={{
                                shrink: true,
                              }}
                              onChange={(event) => {
                                var gamesCopy = this.state.topGames;
                                gamesCopy[index].yourScore = event.target.value;
                                this.setState({
                                  topGames: gamesCopy
                                })
                               this.saveStateToLocalStorage();
                              }}
                            />
                          </StyledTableCell>
                          <StyledTableCell align="left">
                            <Box sx={{ minWidth: 120 }}>
                              <FormControl fullWidth>
                                  <InputLabel id="demo-simple-select-label">Status</InputLabel>
                                  <Select
                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  value={val.status}
                                  label="Select"
                                  onChange={(event) => {
                                    var gamesCopy = this.state.topGames;
                                    gamesCopy[index].status = event.target.value;
                                    this.setState({
                                        topGames: gamesCopy
                                    })
                                    this.saveStateToLocalStorage();
                                  }}
                                  >
                                  {Variables.status.map((val, index) => {
                                      return (
                                          <MenuItem value={val.status}>{val.status}</MenuItem>
                                      );
                                  })}
                                  </Select>
                              </FormControl>
                            </Box>
                          </StyledTableCell>
                      </StyledTableRow>
                      );
                  })}
                </TableBody>
              </Table>
            </TableContainer> 
          </div>
        );
    }
}


class NormalGameTable extends Component {
  saveStateToLocalStorage = () => { 
    localStorage.setItem('Games', JSON.stringify(this.state.topGames)); 
    console.log("Saved to local storage");
  }

  // Fetch data from local storage 
  getStateFromLocalStorage = () => { 
    let data = localStorage.getItem('Games'); 
    console.log(data);
    if(data !== null) {
      this.setState({topGames:JSON.parse(data)}); 
    }else{
      this.saveStateToLocalStorage();
    }
    
  }

  componentDidMount() { 
    // Fetch data from local storage 
    this.getStateFromLocalStorage(); 
    console.log("Component mounted");
  } 
  constructor(props) {
      super(props);
      this.state = {
        "topGames" : Variables.topGames
      };
    }

  render(){
      return (
        <div>
          <TableContainer sx={{ marginLeft: 8}} component={Paper}>
            <Table  sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow key="Rank">
                  <StyledTableCell align="left" sx={{width: '1%',flex: 1}} ></StyledTableCell>
                  <StyledTableCell align="center" >Rank</StyledTableCell>
                  <StyledTableCell align="center">Art</StyledTableCell>
                  <StyledTableCell align="center">Title</StyledTableCell>
                  <StyledTableCell align="center">Year</StyledTableCell>
                  <StyledTableCell align="center">Score</StyledTableCell>
                  <StyledTableCell align="center">Your Score</StyledTableCell>
                  <StyledTableCell align="center">Status</StyledTableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                {this.state.topGames.map((val, index) => {
                  return (
                    <StyledTableRow key={val.rank}>
                      {statusColors.filter(color => color.id === val.status).map(filteredColor => (
                        <TableCell scope="row" sx={{backgroundColor: filteredColor.color }}></TableCell>
                      ))}
                      <StyledTableCell align="center" scope="row">{val.rank}</StyledTableCell>
                      <StyledTableCell align="center" scope="row" onClick={() => { alert(val.title) }} sx={{'&:hover': {backgroundColor: 'D3D3D3',opacity: [0.9, 0.8, 0.7]},justifyContent: "center", display: "flex"}}><CardHeader  avatar={<Avatar sx={{ width: 80, height: 80,boxShadow: 3}} variant="rounded" alt="Game Icon" src={val.art}/>}/></StyledTableCell>
                      <StyledTableCell onClick={() => { alert(val.title) }} sx={{'&:hover': {backgroundColor: 'D3D3D3',opacity: [0.9, 0.8, 0.7]}}} align="center"><h3>{val.title}</h3></StyledTableCell>
                      <StyledTableCell align="center">{val.year}</StyledTableCell>
                      <StyledTableCell align="center">{val.score}</StyledTableCell>
                      <StyledTableCell align="center">
                        <TextField
                          id="filled-number"
                          label="Your Score"
                          type="number"
                          value={val.yourScore}
                          defaultValue={val.yourScore}
                          InputLabelProps={{
                            shrink: true,
                          }}
                          onChange={(event) => {
                            var gamesCopy = this.state.topGames;
                            gamesCopy[index].yourScore = event.target.value;
                            this.setState({
                              topGames: gamesCopy
                            })
                           this.saveStateToLocalStorage();
                          }}
                        />
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        <Box sx={{ minWidth: 120 }}>
                          <FormControl fullWidth>
                              <InputLabel id="demo-simple-select-label">Status</InputLabel>
                              <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={val.status}
                              label="Select"
                              onChange={(event) => {
                                var gamesCopy = this.state.topGames;
                                gamesCopy[index].status = event.target.value;
                                this.setState({
                                    topGames: gamesCopy
                                })
                                this.saveStateToLocalStorage();
                              }}
                              >
                              {Variables.status.map((val, index) => {
                                  return (
                                      <MenuItem value={val.status}>{val.status}</MenuItem>
                                  );
                              })}
                              </Select>
                          </FormControl>
                        </Box>
                      </StyledTableCell>
                  </StyledTableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer> 
        </div>
      );
  }
}

export {FilteredGameTable, NormalGameTable };