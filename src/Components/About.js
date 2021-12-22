import React from "react";

const About = () => {
  return (
    <div className="about">
      <h1>SpotList by Connor McNeil</h1>
      <h2>Accessing the the home page</h2>
      <p>
        If you would like to view the rest of the site, please email me your
        Spotify email & display name at cnnrmcnl@gmail.com so that the Spotify
        API can provide you an approved login token.
      </p>
      <h2>How the website functions</h2>
      <img
        src="https://i.ibb.co/YRH1Vw6/spotify-login-page.png"
        className="image1"
      />
      <p>
        Upon pressing the Sign In to Spotify button, Spotify will notify the
        user of the permissions being requested and provide the user with a
        token to make requests to the Spotify API
      </p>
      <img
        src="https://i.ibb.co/BK4ndfY/allplaylistsandsongs.png"
        className="image2"
      />
      <p>
        On the home page, Spotify will pull the users information from your
        public playlists and display them. The site also features a Web Player
        that allows users to manage their songs. Context manages the playlists
        and active song information, as well as storing the users token that is
        used for API requests.
      </p>
      <p className="lastP">
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
