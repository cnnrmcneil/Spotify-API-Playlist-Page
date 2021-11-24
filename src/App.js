import React, { useEffect, useState } from 'react'
import './App.css';
import Login from './Components/Login';
import Player from './Components/Player';
import { getTokenFromUrl } from './Components/Spotify'
import { useDataLayerValue } from "./Components/DataLayer"
import SpotifyWebApi from 'spotify-web-api-js'

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();


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
    }
    
    console.log('Token: ', token);
  }, []);

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
