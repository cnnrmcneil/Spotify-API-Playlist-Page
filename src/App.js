import React, { useEffect, Switch, Route } from 'react'
import './App.css';
import Login from './Components/Login';
import Player from './Components/Player';
import { getTokenFromUrl } from './Components/Spotify'
import { useDataLayerValue } from "./Components/DataLayer"
import SpotifyWebApi from 'spotify-web-api-js'
import About  from './Components/About';

const spotify = new SpotifyWebApi();

function App() {
  const [{ token, devices, songlist, playlistID }, dispatch] = useDataLayerValue();


  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = "";
    let _token = hash.access_token;

    console.log('this is _token', _token)
    if (_token) {

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      
      spotify.setAccessToken(_token);
      
      //Get username
      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user,
        })
      })

      // Get a user's playlists
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists
        });
      });
      // Get user devices
      spotify.getMyDevices().then((devices) => {
        dispatch({
          type: "SET_DEVICES",
          devices: devices[0]
        })
      })
      //set play
      spotify.play().then((playing) => {
        dispatch({
          type: "SET_PLAYING",
          playing: playing
        })
      })
      // spotify.getPlaylist(playlistID).then((playlistTracks) => {
      //   console.log('songlist called in appJS', playlistID)
      //   dispatch({
      //     type: "SET_SONGLIST",
      //     songlist: playlistTracks,
      //   })
      // })
    }
  }, [token, dispatch]);
  
  console.log('this is playlistID', playlistID)
  console.log('this is songlist', songlist)
  console.log('Token: ', token);
  // console.log('devices are: ', devices)
  // // console.log("playlists are: " )
  // console.log('User is: ', user);
  // console.log('Token is: ', token);
  console.log(devices)

  return (
    <div className='allBackground'>
    <header className='header'>
    <img src=".src/logoforspotifyapi.png" width="50px" height='50px' alt='logo'/><ul>
    <li><a href='/'>Home</a></li>
    <li><a href='/about'>About</a></li>
    <li><a href='/' alt='Sign Out'>{token ? <a alt='Sign Out' onClick={() => {
      dispatch ({
        type: "SET_TOKEN",
        token: null,
      })
    }}>Sign Out</a> : <Login />}</a></li>

    </ul></header>
    <Switch>
    <Route exact path ='/' component={ token ? ( <Player spotify={spotify}/>): (<div><h1 style={{color: 'white', textAlign: 'center', paddingTop: '200px'}}>Please Login To View</h1></div>)} />
    <Route exact path ='/about' component={About}/>
    </Switch>
    </div>
  );
}

export default App;
