import { Component } from 'react';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#FFFFFF',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default class UserSideBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
          user: {name:"Pedrocarush",img: require("../static/avatar/Pedrocarush.webp" )},
          friends: [
              {img:require("../static/avatar/Cunha.webp" ), name:"Cunha"},
              {img:require("../static/avatar/Danik.webp" ), name:"Danik"},
              {img:require("../static/avatar/Kaluza.webp" ), name:"Kaluza"},
              {img:require("../static/avatar/Silveira.webp" ), name:"Silveira"},
              {img:require("../static/avatar/Vicente.webp" ), name:"Vicente"},
              {img:require("../static/avatar/Strom.webp" ), name:"Strom"},
              {img:require("../static/avatar/Xanex.webp" ), name:"Xanex"},
              //{img:require("../static/avatar/Guida.jpg" ), name:"Guida"},
            //------------------------------------------------------ so para mostrar o scroll
              {img:require("../static/avatar/Cunha.webp" ), name:"Cunha"},
              {img:require("../static/avatar/Danik.webp" ), name:"Danik"},
              {img:require("../static/avatar/Kaluza.webp" ), name:"Kaluza"},
              {img:require("../static/avatar/Silveira.webp" ), name:"Silveira"},
              {img:require("../static/avatar/Vicente.webp" ), name:"Vicente"},
              {img:require("../static/avatar/Strom.webp" ), name:"Strom"},
              {img:require("../static/avatar/Xanex.webp" ), name:"Xanex"},
              {img:require("../static/avatar/Guida.jpg" ), name:"Guida"},
            ]
        };
      }

    render(){
        return (
            <div>
                <Item>
                    <h2 style={{ marginTop: '7px', marginBottom: '0px'}} >{ this.state.user.name }</h2>
                </Item>
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', marginBottom: '20px', marginTop: '20px'}}>
                    <Avatar 
                        alt="ERROR"
                        src={ this.state.user.img }
                        sx={{ width: 256, height: 256 }}
                    />
                </div>
                <Item>
                    <div style={{ marginBottom: '5px'}}>
                        <Grid container spacing={0}>
                            <Grid item xs={10}>
                                <TextField fullWidth id="outlined-basic" label="Search for friends" variant="outlined" />
                            </Grid>
                            <Grid item xs={2}>
                                <IconButton>
                                    <SearchIcon fontSize='large'/>
                                </IconButton>
                            </Grid>
                        </Grid>
                    </div>
                    <Divider />
                    <List 
                        sx={{
                            height: 589,
                            overflow: 'auto'
                        }}
                    >
                        {this.state.friends.map((val, index) => {
                            return (
                            <ListItemButton
                            onClick={() => { alert(val.name) }}
                            >
                                <ListItemAvatar>
                                    <Avatar 
                                        alt="ERROR"
                                        src={val.img}
                                    />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={val.name}
                                />
                            </ListItemButton>
                            );
                        })}
                    </List>
                </Item>
            </div>
        )
    }
}