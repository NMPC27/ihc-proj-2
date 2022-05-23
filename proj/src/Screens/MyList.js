import { Component } from 'react';
import Navbar from './Navbar';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';

import { createTheme, ThemeProvider } from '@mui/material/styles';



const optionsList = [
  { label: 'Hades'},
  { label: 'GTA5'},
  { label: 'PUBG'},   
  { label: 'Fortnite'}, 
  { label: 'Overwatch'},
  { label: 'League of Legends'},
  { label: 'CSGO'},
  { label: 'Dota 2'},
  { label: 'God of War'},
  { label: 'Call of Duty'},
  { label: 'Minecraft'},
  { label: 'World of Warcraft'},
  { label: 'StarCraft'},
  { label: 'Diablo'},
  { label: 'Star Wars'},
  { label: 'StarCraft II'},
  { label: 'Diablo II'},
  { label: 'Candy Crush Saga'},
  { label: 'Super Mario'},
  { label: 'Super Mario Bros'},
  { label:'Elden Ring'},
  { label:'NieR: Automata'},
  { label:'Xenoblade Chronicles'},
  { label:'Persona 5'},
  { label:'Celeste'},
  { label:'Gunvolt'},
  { label:'Hades'},
  { label:'Super Mario Bros'},
  { label:'Undertale'},
];

const theme = createTheme({
    palette: {
      Playing: {
        main: '#1565c0',
        contrastText: '#fffff',
      },
      Completed: {
        main: '#388e3c',
        contrastText: '#fff',
      },
      OnHold: {
        main: '#fbc02d',
        contrastText: '#fff',
      },
      Dropped: {
        main: '#d32f2f',
        contrastText: '#fff',
      },
      PlanToPlay: {
        main: '#af52bf',
        contrastText: '#fff',
      },
    },
  });

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
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

const options = optionsList.map((option) => {
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
          topGames:[
            {rank:1, art:require("../static/games/eldenRing/icon.png" ), title:'Elden Ring', year:2022, score:9.14,yourScore:'N/A',status:'Not played'},
            {rank:2, art:require("../static/games/nierAutomata/icon.png" ), title:'NieR: Automata', year:2017, score:9.09,yourScore:'N/A',status:'Not played'},
            {rank:3, art:require("../static/games/xenoblade/icon.png" ), title:'Xenoblade Chronicles', year:2010, score: 9.08,yourScore:9,status:'Completed'},
            {rank:4, art:require("../static/games/persona5/icon.png" ), title:'Persona 5', year:2017, score:9.05,yourScore:'N/A',status:'Not played'},
            {rank:5, art:require("../static/games/celeste/icon.png" ), title:'Celeste', year:2018, score:9.04,yourScore:8,status:'Completed'},
            {rank:6, art:require("../static/games/gunvolt1/icon.png"), title:'Gunvolt',year:2014, score:9.03,yourScore:'N/A',status:'Not played'},
            {rank:7, art:require("../static/games/hades/icon.png"), title:'Hades',year:2020, score:9.02,yourScore:'N/A',status:'Not played'},
            {rank:8,art:require("../static/games/superMarioBrothers/icon.png" ), title:'Super Mario Bros',year:1985, score:9.01,yourScore:'N/A',status:'Not played'},
            {rank:9, art:require("../static/games/undertale/icon.png" ), title:'Undertale',year:2015, score:9,yourScore:'N/A',status:'Not played'},
            {rank:10, art:require("../static/games/cod/icon.jpg" ), title:'Call of Duty',year:2018, score:8.99,yourScore:'N/A',status:'Not played'},
            {rank:11, art:require("../static/games/minecraft/icon.png" ), title:'Minecraft',year:2009, score:8.98,yourScore:'N/A',status:'Not played'},
          ],
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
                                        <Button color="Playing" variant="outlined">
                                            Playing
                                        </Button>
                                    </ThemeProvider>
                                    <ThemeProvider theme={theme}>
                                        <Button color="Completed" variant="outlined">
                                            Completed
                                        </Button>
                                    </ThemeProvider>
                                    <ThemeProvider theme={theme}>
                                        <Button color="OnHold" variant="outlined">
                                            On Hold
                                        </Button>
                                    </ThemeProvider>
                                    <ThemeProvider theme={theme}>
                                        <Button color="Dropped" variant="outlined">
                                            Dropped
                                        </Button>
                                    </ThemeProvider>
                                    <ThemeProvider theme={theme}>
                                        <Button color="PlanToPlay" variant="outlined">
                                            Plan To Play
                                        </Button>
                                    </ThemeProvider>
                                    <Autocomplete
                                    id="grouped-demo"
                                    options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
                                    groupBy={(option) => option.firstLetter}
                                    getOptionLabel={(option) => option.label}
                                    sx={{ width: 320 }}
                                    renderInput={(params) => <TextField {...params} label="Search" />}
                                  />
                                </ButtonGroup>
                            </Grid>
                        </Grid>
                        <Grid item xs={11}>
                          <TableContainer sx={{ marginLeft: 8}} component={Paper}>
                            <Table  sx={{ minWidth: 700 }} aria-label="customized table">
                              <TableHead>
                                <TableRow>
                                  <StyledTableCell >Rank</StyledTableCell>
                                  <StyledTableCell align="left">Art</StyledTableCell>
                                  <StyledTableCell align="left">Title</StyledTableCell>
                                  <StyledTableCell align="left">Year</StyledTableCell>
                                  <StyledTableCell align="left">Score</StyledTableCell>
                                  <StyledTableCell align="left">Your Score</StyledTableCell>
                                  <StyledTableCell align="left">Status</StyledTableCell>
                                  </TableRow>
                              </TableHead>
                              <TableBody>
                                {this.state.topGames.map((val, index) => {
                                  return (
                                    <StyledTableRow onClick={() => { alert(val.title) }} sx={{'&:hover': {backgroundColor: 'D3D3D3',opacity: [0.9, 0.8, 0.7]}}} key={val.rank}>
                                      <StyledTableCell component="th" scope="row">{val.rank}</StyledTableCell>
                                      <StyledTableCell align="left"><CardHeader  avatar={<Avatar sx={{ width: 80, height: 80,boxShadow: 3}} variant="rounded" alt="Game Icon" src={val.art}/>}/></StyledTableCell>
                                      <StyledTableCell align="left"><h3>{val.title}</h3></StyledTableCell>
                                      <StyledTableCell align="left">{val.year}</StyledTableCell>
                                      <StyledTableCell align="left">{val.score}</StyledTableCell>
                                      <StyledTableCell align="left">{val.yourScore}</StyledTableCell>
                                      <StyledTableCell align="left">{val.status}</StyledTableCell>
                                    </StyledTableRow>
                                    );
                                })}
                              </TableBody>
                            </Table>
                          </TableContainer> 
                        </Grid>
                    </Grid>
            </div>
        )
    }
}
