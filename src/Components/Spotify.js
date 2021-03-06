export const authEndpoint = "https://accounts.spotify.com/authorize";

// const redirectUri = "https://cnnrmcneil.github.io";
const redirectUri = "https://cnnrmcneil.github.io/Spotify-API-Playlist-Page/";

const clientId = "9b634ab5a09f410cb628e714fb30b5b8";

// permissions requested
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
  "streaming",
  "user-read-email",
  "user-read-private",
];

export const getTokenFromUrl = () => {
  return (
    window.location.hash
      .substring(1)
      .split("&")

      //review reduce, pulling access token
      .reduce((initial, item) => {
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);

        return initial;
      }, {})
  );
};

// asks for permissions when you login, defined by scopes
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
