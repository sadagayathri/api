import React, { useContext } from "react";
import Mycontext from "./Mycontext";
function Third(){
    var y=useContext(Mycontext);
    return(
            <div className="mybox">
            <h1>third</h1>
            <h1>y::{y}</h1>
        </div>
        
        
    )
}
export default Third;
