import React from "react";
import { useDataLayerValue } from "./DataLayer";

const Songlist = () => {
    const [{ activePlaylist, songlist, token, playlistID }, dispatch] = useDataLayerValue()
    return(
        <div className="songlist" ><ol>
        {console.log('this is playlistID in songlist', playlistID)}
        {console.log('this is songlist in songlist', songlist)}
        {songlist?.track?.items.map((item) => {
            console.log('this is item', item)
            return(
            <div className="songbox">
            {console.log('this is maps songlist: ', songlist)}
            <li className='songlistLi'></li><div className='songartist'><span>{item.name}</span><span>Artist</span></div></div>
        )})}
        <div className="songbox"><li className='songlistLi'></li><div className='songartist'><span>Song</span><span>Artist</span></div></div>
        
        </ol></div>
    )
}

export default Songlist