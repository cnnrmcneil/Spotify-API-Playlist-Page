import React, { useEffect, useState } from 'react'
import './App.css';
import Login from './Components/Login';
import Player from './Components/Player';
import { getTokenFromUrl } from './Components/Spotify'
import { useDataLayerValue } from "./Components/DataLayer"
import SpotifyWebApi from 'spotify-web-api-js'

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token, playlists }, dispatch] = useDataLayerValue();


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
      
      spotify.getMe().then((user) => {
        // console.log('User is: ', user);
        
        
        dispatch({
          type: 'SET_USER',
          user: user,

        })
      })
      // Get a user's playlists
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });
    }
    
    console.log('Token: ', token);
  }, [token, dispatch]);

  console.log("playlists are: " )
  console.log('User is: ', user);
  console.log('Token is: ', token);

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
