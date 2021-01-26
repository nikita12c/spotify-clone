import React from "react";
import "./Body.css";
import Header from "./Header";
import { useStateValue } from "./StateProvider";
import SongRow from "./SongRow";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function Body({ spotify }) {
  const [{ discover_weekly,song,submit,input,playtrack }, dispatch] = useStateValue();
  // console.log("RES>>>",discover_weekly);
  const playPlaylist = (id) => {
    
    // spotify
    //   .play({
    //     context_uri: `spotify:playlist:37i9dQZEVXcJZyENOWUFo7`,
    //   })
    //   .then((res) => {
    //     // console.log("RES inPlayplaylist>>",res)
    //     spotify.getMyCurrentPlayingTrack().then((r) => {
          // dispatch({
          //   type: "SET_ITEM",
          //   item: r.item,
          // });

          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        // });
      // });
  };

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  return (
    <div className="body">
      <Header spotify={spotify} />

      {!input&&(<div className="body__info">
        <img src={"https://newjams-images.scdn.co/v2/discover-weekly/JggijyOT-1gUvlI_fvjU4tOIMSDY48QPBG4UjxLgWKmQaeJ6b0VCYnBdV-OtPHXyRF0uRdp1qEiQZmDUopPMgf2psPeqQYzKgbBElzsQVV4=/MTM6NTA6MDJUOTItMDEtMA==/default"} alt="" />
        {/* <img src={discover_weekly?.images[0]?.url} alt="" /> */}
        {/* <video className='videoTag' autoPlay loop muted>
    <source src={"https://www.unscreen.com/assets/sample_videos/02_woman-1de892e6975df773eafbf040054cfd68eef87e3affaa236b286f1306d261b003.mp4"} type='video/mp4' />
</video> */}
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>)}

      <div className="body__songs">
      {!input&&(<div className="body__icons">
         <PlayCircleFilledIcon
            className="body__shuffle"
            onClick={playPlaylist}
          />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>)}

{/* {console.log("songs>>",song)} */}

        {song?.tracks.items.map((item) => (
          <SongRow id={item.id} item={item}/>
        ))}
        
        {/* {playtrack?.items.map((item) => (
          <SongRow id={item.added_by.id} item={item}/>
        ))} */}

      </div>
    </div>
  );
}

export default Body;
