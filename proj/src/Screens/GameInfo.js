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
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import StarIcon from '@mui/icons-material/Star';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Rating from '@mui/material/Rating';

import Variables from '../variables.json';

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
            "topGames": Variables.topGames,
            genres: ["Action","Adventure","Casual"],
            score: 9.3,
            num_reviews: 172385,
            rank: 17,
            mediaPage: 1,
            popupReview: false,
            reviewRating: 1,
            value: null,
            characters: [
                {name: "Trevor Philips", img: "/games/gta5/characters/1.webp"},
                {name: "Franklin Clinton", img: "/games/gta5/characters/2.webp"},
                {name: "Michael De Santa", img: "/games/gta5/characters/3.webp"},
                {name: "Jimmy de Santa", img: "/games/gta5/characters/4.webp"},
                {name: "Lamar davis", img: "/games/gta5/characters/5.webp"},
                {name: "Devin Weston", img: "/games/gta5/characters/6.webp"},
                {name: "Trevor Philips", img: "/games/gta5/characters/1.webp"},
                {name: "Franklin Clinton", img: "/games/gta5/characters/2.webp"},
                {name: "Michael De Santa", img: "/games/gta5/characters/3.webp"},
                {name: "Jimmy de Santa", img: "/games/gta5/characters/4.webp"},
                {name: "Lamar davis", img: "/games/gta5/characters/5.webp"},
                {name: "Devin Weston", img: "/games/gta5/characters/6.webp"}
            ],
            plot: `Quando um malandro de rua, um ladrão de bancos aposentado e um psicopata aterrorizante se envolvem com alguns dos criminosos mais assustadores e loucos do submundo, o governo dos EUA e a indústria do entretenimento, eles devem realizar golpes ousados para sobreviver nessa cidade implacável onde não podem confiar em ninguém, nem mesmo um no outro.

            Grand Theft Auto V para PC oferece aos jogadores a opção de explorar o gigantesco e premiado mundo de Los Santos e Blaine County em resoluções de até 4K e além, assim como a chance de experimentar o jogo rodando a 60 FPS (quadros por segundo).
            
            O jogo oferece uma ampla seleção de opções de personalização específicas para o PC, com mais de 25 configurações separadas para qualidade de textura, sombreamentos, suavização de bordas e muito mais. Além disso, ele contém diversas opções de personalização dos controles de mouse e teclado. Entre as opções adicionais estão a densidade da população, o controle do tráfego de carros e pedestres, suporte para dois ou três monitores, compatibilidade com telas 3D e suporte para controle plug-and-play.
            
            Grand Theft Auto V para PC inclui o Grand Theft Auto Online, com suporte para até 30 jogadores e dois espectadores. Grand Theft Auto Online para PC inclui todas as atualizações de jogo e conteúdos criados pela Rockstar lançados desde que Grand Theft Auto Online foi ao ar, incluindo os recém-lançados Golpes e Modos Adversários.
            
            A versão para PC do Grand Theft Auto V e Grand Theft Auto Online apresenta o Modo em Primeira Pessoa, que dá aos jogadores a chance de explorar o mundo incrivelmente detalhado de Los Santos e Blaine County de uma maneira completamente nova.
            
            Grand Theft Auto V para PC também traz a estreia do Editor Rockstar, um poderoso conjunto de ferramentas criativas para capturar, editar e compartilhar, de maneira rápida e fácil, vídeos gravados dentro do Grand Theft Auto V e Grand Theft Auto Online. O Modo Diretor do Editor Rockstar permite que jogadores atuem em suas próprias cenas utilizando personagens proeminentes do Modo História, pedestres ou até animais para realizar a sua visão. Junto com opções de câmera e efeitos de edição avançados, que incluem efeitos de câmera lenta e acelerada e diversos filtros, os jogadores poderão adicionar suas próprias músicas, utilizando as faixas das estações de rádio do GTAV, ou controlar dinamicamente a intensidade da trilha sonora do jogo. Vídeos finalizados poderão ser enviados diretamente do Editor Rockstar para o YouTube ou para o Social Club da Rockstar Games, para facilitar o compartilhamento.
            
            Os músicos The Alchemist e Oh No, que fizeram a trilha sonora do jogo, retornam como os apresentadores de uma nova estação de rádio, a Lab FM. A estação apresenta músicas novas e exclusivas da dupla de produtores que foram inspiradas pela trilha sonora original do jogo. Entre os artistas colaboradores convidados estão Earl Sweatshirt, Freddie Gibbs, Little Dragon, Killer Mike, Sam Herring do Future Islands, e muito mais. Jogadores poderão descobrir Los Santos e Blaine County enquanto ouvem suas próprias músicas pelo Self Radio, uma nova estação de rádio que irá apresentar músicas criadas pelos jogadores.
            
            O conteúdo de acesso especial requer uma conta do Social Club da Rockstar Games. Acesse http://rockstargames.com/v/bonuscontent para mais detalhes.`,
            media:[
                {video: "https://www.youtube.com/embed/QkkoHAzjnUs?autoplay=1&mute=1"},
                '/games/gta5/media/1.jpg',
                '/games/gta5/media/2.jpg',
                '/games/gta5/media/3.jpg',
                '/games/gta5/media/4.jpg'
            ],

            reviews: [
                {
                    user: {name: 'Xanex', img: '/avatar/Xanex.webp'} ,
                    rating: 7,
                    helpfull: 137,
                    text: `I am a 45 yo father, probably one of the oldest people playing this game. 
I am a single farther to my Son, who is 14 now. My son got this game for Christmas, 
so we installed it on his computer and he started playing. By the end of the week 
he had 24 hours on this game. This was horrible for me, as it was already hard for 
me to find ways to spend time with my son, as he is always out with his friends or 
just, watching YouTube. So i decided to make a Steam account and get this game to 
see if I could maybe play alongside him. loaded into the game, made my character 
and world and started playing but I was stuck on what you where supposed to do. 
I asked my Son for help and he hosted a game for me to join. loved it as it was the 
best time had spent with my Son since my wife had died. This game has ever since 
brought me and my son closer again and now we actually spend time together outside 
the house together as well. This game reminded me that there's fun to be had in 
everything, and it has brought both me and my Son many happy memories`
                },
                {
                    user: {name: 'Strom', img: '/avatar/Strom.webp'} ,
                    rating: 7,
                    helpfull: 34,
                    text: `I am a 45 yo father, probably one of the oldest people playing this game. 
I am a single farther to my Son, who is 14 now. My son got this game for Christmas, 
so we installed it on his computer and he started playing. By the end of the week 
he had 24 hours on this game. This was horrible for me, as it was already hard for 
me to find ways to spend time with my son, as he is always out with his friends or 
just, watching YouTube. So i decided to make a Steam account and get this game to 
see if I could maybe play alongside him. loaded into the game, made my character 
and world and started playing but I was stuck on what you where supposed to do. 
I asked my Son for help and he hosted a game for me to join. loved it as it was the 
best time had spent with my Son since my wife had died. This game has ever since 
brought me and my son closer again and now we actually spend time together outside 
the house together as well. This game reminded me that there's fun to be had in 
everything, and it has brought both me and my Son many happy memories`
                },
                {
                    user: {name: 'Cunha', img: '/avatar/Cunha.webp'} ,
                    rating: 7,
                    helpfull: 4,
                    text: `I am a 45 yo father, probably one of the oldest people playing this game.
I am a single farther to my Son, who is 14 now. My son got this game for Christmas, 
so we installed it on his computer and he started playing. By the end of the week 
he had 24 hours on this game. This was horrible for me, as it was already hard for 
me to find ways to spend time with my son, as he is always out with his friends or 
just, watching YouTube. So i decided to make a Steam account and get this game to 
see if I could maybe play alongside him. loaded into the game, made my character 
and world and started playing but I was stuck on what you where supposed to do. 
I asked my Son for help and he hosted a game for me to join. loved it as it was the 
best time had spent with my Son since my wife had died. This game has ever since 
brought me and my son closer again and now we actually spend time together outside 
the house together as well. This game reminded me that there's fun to be had in 
everything, and it has brought both me and my Son many happy memories`
                },
            ]
        }
    
    }

    handleChangeMedia = (event, value) => {
        this.setState({mediaPage: value});
    }

    saveStateToLocalStorage = () => { 
        localStorage.setItem('Games', JSON.stringify(this.state.topGames)); 
        console.log("Saved to local storage");
      }

    getStateFromLocalStorage = () => { 
        let data = localStorage.getItem('Games'); 
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
                                    <h2>{ this.state.num_reviews.toString().split( /(?=(?:...)*$)/ ).join(' ') + ' reviews' }</h2>
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
                            {this.state.topGames.filter(game=> game.title==="GTA 5" ).map((val, index) => {
                                 return (
                                    <Grid item xs={8}>
                                
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Select Game State</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Select Game State"
                                            value={this.state.topGames[11].status}
                                            onChange={(event) => {
                                                var gamesCopy = this.state.topGames;
                                                gamesCopy[11].status = event.target.value;
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
                                </Grid>
                                 );
                                })}
                                <Grid item xs={4}>
                                <Button onClick={() => {this.setState( {popupReview: true} )
                                console.log(this.state.popupReview)}}
                                        variant="outlined" style={{ position: 'relative', top: '12%' }}>Add Review
                                    </Button>
                                    <Dialog
                                        open={this.state.popupReview}
                                        onClose={() => {this.setState( {popupReview: false} )}}
                                        aria-labelledby="alert-dialog-title"
                                        aria-describedby="alert-dialog-description"
                                    >
                                        <DialogTitle id="alert-dialog-title">{"Review"}</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText id="alert-dialog-description">

                                                <Grid container spacing={2}>
                                                    <Grid item xs={5}>
                                                    </Grid>
                                                    <Grid item xs={6} style={{textAlign: 'right'}}>
                                                        <Rating name="no-value" value={this.state.reviewRating} max={10} style={{marginTop:'0.3vw'}}
                                                        onChange={(event, newValue) => {
                                                        this.setState({reviewRating: newValue});
                                                        }}/>
                                                    </Grid>
                                                    <Grid item xs={1}>
                                                        <h2 style={{marginTop:'0px',marginBottom:'0px'}}> {this.state.reviewRating} </h2>
                                                    </Grid>
                                                    
                                                        <TextField
                                                            style={{ marginTop: '5px', width:'100%'}}
                                                            id="outlined-multiline-static"
                                                            label="Write Review"
                                                            multiline
                                                            rows={10}
                                                            defaultValue="Write Your Review Here..."
                                                        />
                                                    
                                                    </Grid>
                                            </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                        <Button onClick={() => {this.setState( {popupReview: false} )}}>Cancel</Button>
                                        <Button onClick={() => {this.setState( {popupReview: false} )}} autoFocus>OK</Button>
                                        </DialogActions>
                                    </Dialog>
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
                                <Pagination count={ this.state.media.length } color="primary" onChange={this.handleChangeMedia} />
                            </div>
                        </Item>
                    </Grid>
                </Grid>  



                <Grid container spacing={2} style={{marginTop: '0px'}}>
                    <Grid item xs={6}>
                        <Item>
                            <h3 style={{marginBottom: '0px', marginTop: '0px', textAlign:'left' }}>Plot</h3>
                            <Divider/>
                            <TextField
                                style={{ marginTop: '5px', width:'100%'}}
                                id="outlined-multiline-static"
                                label=""
                                disabled={true}
                                multiline
                                rows={12}
                                defaultValue={ this.state.plot }
                            />
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>
                            <h3 style={{marginBottom: '0px', marginTop: '0px', textAlign:'left' }}>Characters</h3>
                            <Divider/>
                            <List 
                                sx={{
                                    height: 298,
                                    overflow: 'auto'
                                }}
                            >
                                {this.state.characters.map((val, index) => {
                                    return (
                                    <ListItemButton>
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
                    </Grid>
                </Grid>


                
                <Grid container spacing={2} style={{marginTop: '0px'}}>
                    <Grid item xs={12}>
                        <Item>
                            <h3 style={{marginBottom: '0px', marginTop: '0px', textAlign:'left' }}>User Reviews</h3>
                            <Divider/>
                            <List 
                                sx={{
                                    height: 600,
                                    overflow: 'auto'
                                }}
                            >
                                {this.state.reviews.map((val, index) => {
                                    return (
                                    <ListItemButton>
                                        <Grid container spacing={0}>
                                            <Grid item xs={1}>
                                                <div style={{margin: 'auto', width: '50%', height: '50%'}}>
                                                    <Avatar 
                                                        alt="ERROR"
                                                        src={val.user.img}
                                                    />
                                                </div>
                                            </Grid>
                                            <Grid item xs={5}>
                                                <ListItemText
                                                    style={{marginBottom: '0px', marginTop: '0px', textAlign:'left' }}
                                                    primary={val.user.name}
                                                    secondary={val.helpfull + ' people found this review helpful'}
                                                />
                                            </Grid>
                                            <Grid item xs={5}></Grid>
                                            <Grid item xs={1}>
                                                <Grid container spacing={0}>
                                                    <Grid item xs={6}>
                                                        <h2 style={{marginRight: '5px', marginTop: '5px', textAlign:'right'}}>{ val.rating }</h2>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <StarIcon fontSize='large' sx={{ color: '#FFFF00' }}/>
                                                    </Grid>
                                                </Grid>
                                            </Grid>   
                                            <Grid item xs={12}>
                                                <Divider/>
                                                <TextField
                                                    style={{ marginTop: '5px', width:'100%'}}
                                                    id="outlined-multiline-static"
                                                    label=""
                                                    disabled={true}
                                                    multiline
                                                    rows={7}
                                                    defaultValue={ val.text }
                                                />
                                            </Grid>                     
                                        </Grid>
                                    </ListItemButton>
                                    );
                                })}
                            </List>
                        </Item>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
