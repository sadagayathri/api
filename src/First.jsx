import React from "react";
import Second from "./Second";
function First(){
    return(
        <div className="mybox">
            <h1>first</h1>
            {/* <h1>{props.x}</h1> */}
        <Second></Second>
        </div>
    )
}
export default First;