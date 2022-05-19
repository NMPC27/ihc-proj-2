import { Component } from 'react';
import Navbar from './Navbar';
import Navbar2 from './Navbar2';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

//para a tabela
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

//para a art
import Box from '@mui/material/Box';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#FFFFFF',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

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

export default class TopGames extends Component {
    constructor(props) {
        super(props);
    
        this.state = {

            top5:[
                {rank:1, art:require('../static/games/eldenRing/icon.png'), title:'Elden Ring', year:2022, score:9.14,yourScore:'N/A',status:'Not played'},
                {rank:2, art:require('../static/games/nierAutomata/icon.png'), title:'NieR: Automata', year:2017, score:9.09,yourScore:'N/A',status:'Not played'},
                {rank:3, art:require('../static/games/xenoblade/icon.png'), title:'Xenoblade Chronicles', year:2010, score: 9.08,yourScore:9,status:'Completed'},
                {rank:4, art:require('../static/games/persona5/icon.png'), title:'Persona 5', year:2017, score:9.05,yourScore:'N/A',status:'Not played'},
                {rank:5, art:require('../static/games/celeste/icon.png'), title:'Celeste', year:2018, score:9.04,yourScore:8,status:'Completed'},

              ],
          };

        }
    

    render(){
        return (  
            <div>
                <Navbar2/>
                <Item><h2 style={{ marginBottom: '0px', marginTop: '10px', color: '#0077ff' }} >TOP GAMES</h2> </Item>

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center">Rank</StyledTableCell>
                                <StyledTableCell align="center">Art</StyledTableCell>
                                <StyledTableCell align="left">Title</StyledTableCell>
                                <StyledTableCell align="center">Year</StyledTableCell>
                                <StyledTableCell align="center">Score</StyledTableCell>
                                <StyledTableCell align="center">Your Score</StyledTableCell>
                                <StyledTableCell align="center">Status</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.top5.map(row => (
                                <StyledTableRow key={row.rank}>
                                    <StyledTableCell component="th" scope="row" align="center" >{row.rank}</StyledTableCell>
                                    <StyledTableCell align="center">{ 
                                        <Box
                                            sx={{
                                                width: "100%",
                                                height: 150,
                                                backgroundColor: 'D3D3D3',
                                                '&:hover': {
                                                backgroundColor: 'D3D3D3',
                                                opacity: [0.9, 0.8, 0.7],
                                                },
                                            }}

                                            onClick={() => { alert(row.title) }}
                                        >
                                            <img src= { row.art } alt="ERROR" width="40%" height="150"/>
                                        </Box>
                                    }</StyledTableCell>
                                    <StyledTableCell align="left">{
                                        <Box
                                        sx={{
                                            width: "100%",
                                            height: 150,
                                            backgroundColor: 'D3D3D3',
                                            '&:hover': {
                                            backgroundColor: 'D3D3D3',
                                            opacity: [0.9, 0.8, 0.7],
                                            },
                                        }}

                                        onClick={() => { alert(row.title) }}
                                        >
                                        <h3>{row.title}</h3>
                                    
                                        </Box>
                                    }</StyledTableCell>
                                    <StyledTableCell align="center" >{row.year}</StyledTableCell>
                                    <StyledTableCell align="center">{row.score}</StyledTableCell>
                                    <StyledTableCell align="center">{row.yourScore}</StyledTableCell>
                                    <StyledTableCell align="center">{row.status}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>            
            </div>
        );

    }
}