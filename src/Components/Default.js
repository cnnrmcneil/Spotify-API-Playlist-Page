import React from "react";
import "./player.css";

export default function Default() {
  return (
    <div className="defaultPage">
      <h1>Hi, welcome to SpotLists!</h1>
      <p>
        Due to limitations in accessibility provided by the Spotify API, users
        must be verified to access the Home page. Please see the About page for
        more information.
      </p>
    </div>
  );
}
