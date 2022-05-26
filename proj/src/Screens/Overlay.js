import { Component } from 'react';
import Navbar from './Navbar';
import GameSideBar from './GameSideBar';
import GameInfo from './GameInfo';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';




export default class Overlay extends Component {
    constructor(props) {
        super(props);
    
        this.state = {}
    
    }

    render(){
        return (                  
            <div
            id="overlay" onClick={()=>{document.getElementById("overlay").style.display = "none";}}
            style={{
                position: 'fixed',
                display: 'none',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: '#000000',
                opacity: 0.5,
                zIndex: 2,
                cursor: 'pointer'
            }}
            >
            

            </div>
        );
    }
}
