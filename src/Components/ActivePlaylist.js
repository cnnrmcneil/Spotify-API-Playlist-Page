import React from "react";
import { useDataLayerValue } from "./DataLayer";

const ActivePlaylist = () => {
    const [{ activePlaylist, activePlaylistImage }, dispatch] = useDataLayerValue()
    {console.log('this is active playlist', activePlaylist)}
    return(
        <div className="active-playlist-box"><img src={activePlaylist.images[0].url}></img>
        <a href={activePlaylist.external_urls.spotify}><h5>{activePlaylist.name}</h5></a>
        <a href={activePlaylist.owner.external_urls.spotify}><p>Curated by {activePlaylist.owner.display_name}</p></a>
        </div>
    )
}

export default ActivePlaylist