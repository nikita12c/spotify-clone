import { findAllByDisplayValue } from "@testing-library/react";

export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  input:null,
  token:null,
  //  token:"BQDZL5vyh1NRAzivguB6yT34c4niI-Bqs9NOoa85DHaXbt6g0TE_H5xNy6bSEkSL3B748e0v-MmuP-iHHXByAPeyvsKexqezxefxwToBFWZ5b_Oe-V029NDUagZ9Wvs_ujZN9V0vcOzNWHDbC821ZAEWv5XdoYPjDkMKe4lqEdd7Zz67",
};

const reducer = (state, action) => {
  // console.log("ACTION>>> ",action);  //vey imp debugg
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };
    case "SET_INPUT":
      return {
        ...state,
        input: action.input,
      };
    case "SET_SUBMIT":
      return {
        ...state,
        submit: action.submit,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_SONG":
      return {
        ...state,
        song: action.song,
      };
    case "SET_PLAYLISTSONG":
      return {
        ...state,
        playtrack: action.playtrack,
      };
    default:
      return state;
  }
};

export default reducer;
