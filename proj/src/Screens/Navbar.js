import { Component } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#FFFFFF',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


export default class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
          value: "Select Games or Users",
          user: {name:"Pedrocarush",img: require("../static/avatar/Pedrocarush.webp" )},
        };
      }

    render(){
        return (
            <Box
                sx={{
                width: "100%",
                height: 90,
                backgroundColor: '#12DDD4'
                }}
            >

            <div>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <Item>
                            <Grid container spacing={0}>
                                <Grid item xs={2}>
                                    <Avatar 
                                        alt="ERROR" 
                                        src= { this.state.user.img }
                                    /> 
                                </Grid>
                                <Grid item xs={10}>
                                    <h2 style={{ marginTop: '7px', marginBottom: '0px'}} >{ this.state.user.name }</h2>
                                </Grid>
                            </Grid>
                        </Item>
                    </Grid>
                    <Grid item xs={0.5}></Grid>
                    <Grid item xs={1}>
                        <Button variant="outlined">TOP GAMES</Button>
                    </Grid>
                    <Grid item xs={1}>
                        <Button variant="outlined">GENGRES</Button>
                    </Grid>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={3}>
                        <Grid container spacing={0}>
                            <Grid item xs={3}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Select</InputLabel>
                                    <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={this.state.value}
                                    label="Select"
                                    onChange={(event) => {
                                        this.setState({ value: event.target.value })
                                    }}
                                    >
                                    <MenuItem value={'Games'}>Games</MenuItem>
                                    <MenuItem value={'Users'}>Users</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={9}>
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={optionsList}
                                    sx={{ width: 320 }}
                                    renderInput={(params) => <TextField {...params} label= { this.state.value } />}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
            </Box>
        );
    }
}

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
    { label: 'Super Mario Bros'}
]

