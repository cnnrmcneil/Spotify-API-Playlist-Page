import React, { useEffect, useState } from 'react'
import './App.css';
import Login from './Components/Login';
import Player from './Components/Player';
import { getTokenFromUrl } from './Components/Spotify'
import { useDataLayerValue } from "./Components/DataLayer"
import SpotifyWebApi from 'spotify-web-api-js'
import ActivePlaylist from './Components/ActivePlaylist';
import axios from 'axios';

const spotify = new SpotifyWebApi();

function App() {
  const [{ token, devices, activePlaylist, songlist, playlistID }, dispatch] = useDataLayerValue();


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
      spotify.getPlaylist(playlistID).then((playlistTracks) => {
        console.log('songlist called in appJS', playlistID)
        dispatch({
          type: "SET_SONGLIST",
          songlist: playlistTracks,
        })
      })
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
    <div>
    <header className='header'><ul>
    <li><a href='/'>Home</a></li>
    <li><a href='/'>About</a></li>
    </ul></header>
    { token ? ( <Player spotify={spotify}/>): (<div><h1>Spotify API</h1><Login /></div>)}
    </div>
  );
}

export default App;
