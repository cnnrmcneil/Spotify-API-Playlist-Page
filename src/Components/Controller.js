import React, { useEffect } from "react";
import { useDataLayerValue } from "./DataLayer";
import SpotifyPlayer from "react-spotify-web-playback";
import "./player.css";

const styleProps = {
  trackArtistColor: "white",
  trackNameColor: "white",
  activeColor: "black",
  altColor: "black",
  bgColor: "black",
};

const Controller = (props) => {
  const [newNumTrack, setNewNumTrack] = React.useState(0);
  console.log("this is props", props);
  useEffect(() => {
    setNewNumTrack(props.numTrack);
  }, [props]);
  const [{ token, activePlaylist, songNumber }, dispatch] = useDataLayerValue();
  return (
    <div className="controller">
      <SpotifyPlayer
        styles={styleProps}
        token={token}
        uris={[`${activePlaylist.uri}`]}
        offset={songNumber}
        autoPlay={true}
      />
    </div>
  );
};

export default Controller;
