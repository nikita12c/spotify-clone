import React,{useState} from "react";
import "./Header.css";
import { useStateValue } from "./StateProvider";
import { Avatar,Fab } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { useEffect } from "react";
import MenuListComposition from "./ToggleMenu";


function Header({ spotify }) {
  const [{ user }, dispatch] = useStateValue();
  const [input,setInput]=useState('');
  const [submit,setSubmit]=useState('');

const onChangeInput=(new_input)=>{
  setInput(new_input)
  dispatch({
       type: "SET_INPUT",
       input: new_input,
     })
  // setInput(null)
}

  const handleKeypress = e => {
    //it triggers by pressing the enter key
  if (e.keyCode === 13) {
    setInput("");
  }
};
const handleSubmit=(e)=>{
  spotify.searchTracks(`${input}`).then((response) => {
    dispatch({
      type: "SET_SONG",
      song: response,
    })
    // setInput("");
  });
}

// console.log("USER IN HEADER >>>> ",user);
  return (
    <div className="header">
    
      <div className="header_prev">
      <Fab className="header_prev_color" disabled aria-label="like">
       <KeyboardArrowLeftIcon fontSize="large" style={{ color: "white" }}/>
     </Fab>
      <Fab disabled aria-label="like" >
       <KeyboardArrowRightIcon fontSize="large" style={{ color: "white" }}/>
     </Fab>
     </div>

      <div className="header__left">
        <SearchIcon />

        <input
          className="header__left_input"
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
          value={input}
          onChange={e=>onChangeInput(e.target.value)}
          onKeyPress={handleSubmit}
          onKeyDown={handleKeypress}
          name="searchTerm"
          autocomplete="off"
        />
        <button className="header__left_button" type="submit" onClick={handleSubmit}>Hidden submit</button>
 
      </div>

      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
        <MenuListComposition />
      </div>
    </div>
  );
}

export default Header;
