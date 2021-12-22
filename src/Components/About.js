import React from "react";

const About = () => {
  return (
    <div className="about">
      <h1>SpotList: by Connor McNeil</h1>
      <h2>Accessing the the home page: </h2>
      <p>
        If you would like to view the rest of the site, please email me your
        Spotify email & display name at cnnrmcnl@gmail.com so that the Spotify
        API can provide you an approved login token.
      </p>
      <h2>How the website functions</h2>
      <p>
        Upon pressing the Sign In to Spotify button, Spotify will notify you of
        the permissions being requested and provide you with a token to make
        requests to the Spotify API
      </p>
      <p>
        On the home page, Spotify will pull your information from your public
        playlists and display them. The site also features a Web Player that
        allows you to manage your songs. Context manages what playlist and song
        information, as well as storing your token that is used for API
        requests.
      </p>
      <p>
        Thanks to{" "}
        <a href="https://github.com/gilbarbara/react-spotify-web-playback">
          Gil Barbara
        </a>{" "}
        for the Spotify Web Player and{" "}
        <a href="https://github.com/thelinmichael/spotify-web-api-node">
          Michael Thelin
        </a>{" "}
        for the Spotify Web API Node
      </p>
    </div>
  );
};

export default About;
