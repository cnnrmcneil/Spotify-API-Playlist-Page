import React from "react";

const About = () => {
  return (
    <div>
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
    </div>
  );
};

export default About;
