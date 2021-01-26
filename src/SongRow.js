import React from "react";
import "./SongRow.css";

function SongRow({ id,item }) {
  // console.log("TRACK >>>>  ",id);
  // console.log("ITEM >>>>  ",item);
  return (
    <div class="songRow">
    <iframe class="songRow_iframe" src={`https://open.spotify.com/embed/track/${id}`} width="1000" height="120" frameborder="0" framebroderradius="20" allowtransparency="true" allowfullscreen="" allow="encrypted-media">
    </iframe>
    <div class="songRow__info">
    <h4>{item.album.name}</h4>
    <h5>Release Date : {item.album.release_date}</h5>
    <h5>Popularity : {item.popularity}/100</h5></div>
    </div>
  );
}

export default SongRow;
