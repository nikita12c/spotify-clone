import React, { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { useStateValue } from "./StateProvider";
import Player from "./Player";
import { getTokenFromResponse } from "./spotify";
import "./App.css";
import Login from "./Login";

const s = new SpotifyWebApi();

function App() {
  const [{ token ,input}, dispatch] = useStateValue(); //using datalayerValue which we described there
  // console.log("NEW INPUT IN APP.JS --> ",input)
  useEffect(() => {
    // Set token
    const hash = getTokenFromResponse();
    // console.log("Hash is >>>",hash);
    window.location.hash = ""; //to make the token at the url set to blank
    let _token = hash.access_token;
    // console.log("Token is >>>",_token);
    
    if (_token) {
      s.setAccessToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      // console.log("Token is >>>",_token);

      s.searchTracks().then((response) => {
        // console.log("INPUT IN SEARCHTRACK>>>>> ",input);
        // console.log("RESPONSE>>>>> ",response);
        dispatch({
          type: "SET_SONG",
          song: response,
        })
      });
     

      s.getPlaylist("37i9dQZEVXcIJazRV9ISoM").then((response) =>{
        // console.log("discover>>>>> ",response);
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      });
      s.getPlaylistTracks("0pBemwUklqThjqr7vrzhAV").then((playtrack) =>{
        console.log("tracksss>>>>> ",playtrack);
        dispatch({
          type: "SET_PLAYLISTSONG",
          playtrack: playtrack,
        })
      });    

      s.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );

      dispatch({
        type: "SET_SPOTIFY",
        spotify: s,
      });

      s.getMe().then((user) => {
        // console.log("USER>> ",user);
        dispatch({
          type: "SET_USER",
          user,
        });
      });

      s.getUserPlaylists().then((playlists) => {
        console.log("PLAYLIST>> ",playlists);
        dispatch({
          type: "SET_PLAYLISTS",
          playlists:playlists,
        });
      });
    }
  }, [token, dispatch]);

// console.log("Token in APP>>> ",token);
  return (
    <div className="app">
      {!token && <Login />}
      {token && <Player spotify={s} />}
    </div>
  );
}

export default App;
