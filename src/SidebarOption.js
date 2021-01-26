import React from "react";
import "./SidebarOption.css";
import SongRow from "./SongRow";
import { useStateValue } from "./StateProvider";

function SidebarOption({ option = "test", Icon }) {
  const [{ playtrack }, dispatch] = useStateValue();
  // console.log("GOT tracksss>>>>> ",playtrack);
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (<h4>{option}</h4>) : 
      (<p>
      {option}
      </p>)}
    </div>
  );
}

export default SidebarOption;
// onClick={playtrack?.items.map((item) => (
//   <SongRow id={item.added_by.id} item={item}/>
// ))}