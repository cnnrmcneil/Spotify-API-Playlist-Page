import React from "react";
import { useDataLayerValue } from "./DataLayer";

const Songlist = () => {

const [{ activePlaylist, songlist }, dispatch] = useDataLayerValue()
    return(
        <div className="songlist" ><ol>
        {songlist?.track?.items.map((item) => {
            dispatch({
                type: "SET_SONGLIST",
                songlist: activePlaylist
            })
            return(
            <div className="songbox">
            {console.log('this is maps songlist: ', songlist)}
            <li className='songlistLi'></li><div className='songartist'><span>{item.href}</span><span>Artist</span></div></div>
        )})}
        <div className="songbox"><li className='songlistLi'></li><div className='songartist'><span>Song</span><span>Artist</span></div></div>
        
        </ol></div>
    )
}

export default Songlist