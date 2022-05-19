import { Component } from 'react';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import { Box } from '@mui/system';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#FFFFFF',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default class GamePage extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            genres: ["Action","Adventure","Casual"],
            score: 9.3,
            reviews: 172385,
            rank: 17,
            mediaPage: 1,
            value: null,
            media:[
                {video: "https://www.youtube.com/embed/QkkoHAzjnUs?autoplay=1&mute=1"},
                require('../static/games/gta5/media/1.jpg'),
                require('../static/games/gta5/media/2.jpg'),
                require('../static/games/gta5/media/3.jpg'),
                require('../static/games/gta5/media/4.jpg')
            ]
        }
    
    }

    handleChangeMedia = (event, value) => {
        this.setState({mediaPage: value});
    }

    render(){
        return (  
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Item>
                            <Stack direction="row" spacing={1}>
                                {this.state.genres.map((val, index) => {
                                    return (<Button variant="outlined"> {val} </Button>);}
                                )}
                            </Stack>                      
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <h3>‎</h3>
                                    <h2>Score:</h2>
                                    <h2>{ this.state.score }</h2>
                                    <h2>{ this.state.reviews.toString().split(' ').map(iNum => parseInt(iNum, 10)) + ' reviews' }</h2>
                                    
                                    <h3>‎</h3>
                                </Grid>
                                <Grid item xs={6}>
                                    <h3>‎</h3>
                                    <h2>‎</h2>
                                    <h2>{ 'Ranked #' + this.state.rank }</h2>
                                </Grid>
                            </Grid>
                            <Divider style={{marginBottom: '10px'}} />
                            <Grid container spacing={2}>
                                <Grid item xs={8}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Select Game State</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={this.state.value}
                                        label="Select Game State"
                                        onChange={(event) => {
                                            this.setState({ value: event.target.value })
                                        }}
                                    >
                                        <MenuItem value={1}>Playing</MenuItem>
                                        <MenuItem value={2}>Completed</MenuItem>
                                        <MenuItem value={3}>On-Hold</MenuItem>
                                        <MenuItem value={4}>Dropped</MenuItem>
                                        <MenuItem value={5}>Plan To Play</MenuItem>
                                    </Select>
                                </FormControl>
                                </Grid>
                                <Grid item xs={4}>
                                    <Button variant="outlined" style={{ position: 'relative', top: '12%' }}>Add Review</Button>
                                </Grid>
                            </Grid>
                            
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>
                            <Box
                                sx={{
                                    width: '100%',
                                    height: 300
                                }}
                                style={{marginBottom: '10px'}} 
                            >
                                {   
                                    this.state.media[this.state.mediaPage-1] instanceof Object ?
                                    <iframe width="100%" height="300" title='Game Trailer' src={ this.state.media[this.state.mediaPage-1].video }></iframe>
                                    : <img src= { this.state.media[this.state.mediaPage-1]} alt="ERROR" width="100%" height="300"/>
                                }
                                
                            </Box>
                            <div style={{ margin:'auto', width: '50%' }}>
                                <Pagination count={5} color="primary" onChange={this.handleChangeMedia} />
                            </div>
                        </Item>
                    </Grid>
                </Grid>               
            </div>
        );
    }
}
