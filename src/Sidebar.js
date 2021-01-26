import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { getTokenFromResponse } from "./spotify";
import { useStateValue } from "./StateProvider";
import Playlist from "./Playlist";

function Sidebar() {
  const [{ playlists }, dispatch] = useStateValue();
  // console.log("PLAYLIST IN SIDEBAR >>>> ",playlists);

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOption Icon={HomeIcon} option="Home" />
      <SidebarOption Icon={SearchIcon} option="Search" />
      <SidebarOption Icon={LibraryMusicIcon} option="Your Library" />
      <br />
      <strong className="sidebar__title">YOUR PLAYLISTS</strong>
      <hr />
        {/* {console.log("PLAYLIST IN BODY",playlists)} */}
      {playlists?.items?.map((playlist) => (
        <SidebarOption option={playlist.name} />
      ))}
      <br/>
      <br/>
      <strong className="sidebar__title">RECOMMENDED</strong>
      <hr/>
      <Playlist/>
    </div>
  );
}

export default Sidebar;
