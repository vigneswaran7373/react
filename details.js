import React, { useState } from "react";

function Color(){
    const[color,setcolor]=useState("Blue")
    const[model,setmodel]=useState("2012")
    const[brand,setbrand]=useState("bmw")
    return(
        <>
        <h1>my fav color is {color}</h1>
        <h1>my fav model is {model}</h1>
        <h1>my fav brand is {brand}</h1>
        <button onClick={()=>{setcolor("red") ;setbrand("rr") ; setmodel("2025")}}>click here</button>
        </>
    );
}
export default Color;
{
  /*this code for multiple state*/
}