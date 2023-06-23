import React from "react";
import { useAppContext } from "./context";

function Dot(props) {


  return (
    <div className={`dot ${props.currentPerson === props.index ? "dot-active" : ""}`}>    
    </div>
  );
}

export default Dot;
