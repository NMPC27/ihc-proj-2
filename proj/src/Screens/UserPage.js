import { Component } from 'react';
import Navbar from './Navbar';
import Navbar2 from './Navbar2';
import UserSideBar from './UserSideBar';
import UserInfo from './UserInfo';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#D3D3D3',
    padding: theme.spacing(1),
    textAlign: 'center',
  }));

export default class UserPage extends Component {
    constructor(props) {
        super(props);
    
        this.state = {}
    
    }

    render(){
        return (  
            <div>
                <Navbar/>
                <Grid container spacing={2} style={{ marginTop: '0px'}}>
                    <Grid item xs={3}>
                        <Item><UserSideBar/></Item>
                    </Grid>
                    <Grid item xs={9}>
                        <Item><UserInfo/></Item>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
