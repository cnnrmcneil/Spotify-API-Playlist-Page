import React from "react";
import { useDataLayerValue } from "./DataLayer";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

const Songlist = (props) => {
    const [{ songlist, playlistID, songNumber }, dispatch] = useDataLayerValue()
    return(
        <div className="songlist" ><ol>
        {console.log('this is playlistID in songlist', playlistID)}
        {console.log('this is songlist in songlist', songlist)}
        {songlist?.tracks?.items.map((item, index) => {
            console.log('this is item', item)
            return(
            <div className="songbox">
            {console.log('this is maps songlist: ', songlist)}
            <li className='songlistLi'><button value={index} onClick={(e) => {
                console.log('this is index', index)
                props.changeFunc(e.target.value)
            }}>
            </button></li><div className='songartist'><span>{item.track.name}</span><span>{item.track.artists.map((artist) => {
                {return artist.name;}}).join(', ')}</span></div></div>
        )})}
        <div className="songbox"><li className='songlistLi'></li><div className='songartist'><span>Song</span><span>Artist</span></div></div>
        
        </ol></div>
    )
}

export default Songlist