import { Component } from 'react';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#FFFFFF',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default class GameSideBar extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            name: "GTA5",
            score: 9.3,
            icon: require('../static/games/gta5/icon.jpg'),
            platforms: ["PC", "PS4", "XBOX"],
            developer: "Rockstar Games",
            releaseDate: "10/10/2018"

        }
    
    }

    render(){
        return (  
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={9.5}>
                        <Item>
                            <h2 style={{ marginTop: '0px', marginBottom: '0px'}} >{ this.state.name }</h2>
                        </Item>
                    </Grid>
                    <Grid item xs={2.5}>
                        <Item>
                            <h2 style={{ marginTop: '0px', marginBottom: '0px'}} >{ this.state.score }</h2>
                        </Item>
                    </Grid>
                </Grid>
                <Item style={{ marginTop: '15px', marginBottom: '15px'}} >
                    <img src= { this.state.icon } alt="ERROR" width="100%" height="435"/>
                </Item>
                <Stack direction="row" spacing={2}>
                    {this.state.platforms.map((val, index) => {
                        return (<Item> {val} </Item>);}
                    )}
                </Stack>
                <Item style={{ marginTop: '15px', marginBottom: '0px'}}>
                    <h2 style={{ marginTop: '0px', marginBottom: '0px', textAlign: 'left' }} > Developer: </h2>
                    <h3 style={{ marginTop: '0px', marginBottom: '0px'}} > { this.state.developer } </h3>
                    <h2 style={{ marginTop: '5px', marginBottom: '0px', textAlign: 'left' }} > Release Date: </h2>
                    <h3 style={{ marginTop: '0px', marginBottom: '0px'}} > { this.state.releaseDate } </h3>
                </Item>
            </div>
        );
    }
}
