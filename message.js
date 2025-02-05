
import React, { useState } from "react";
function M1(props){
    const[info,setinfo]=useState("open")
    const[info2,setinfo2]=useState("avilable")
    const[car,setcar]=useState({
        name:"indiko",
        model:"r2",
        year:2014,

    })
    return(
        <>
        <h1 className="m1">hello this message prompt</h1>
        <h2 className="m2">test component</h2>
        <h1>people name is   {props.name}</h1>
        <h1>people age is    {props.age}</h1>
        <h1>people gender is {props.gender}</h1>
        <h1>the shop is {info} </h1>
        <h1>the shop is {info2} </h1>
        <h1>the car name is {car.name} </h1>
        <h1>the car name is {car.model} </h1>
        <h1>the car name is {car.year} </h1>
        <button onClick={()=>{setinfo("close");setinfo2("not avilable");
           setcar(previousState=>{return{...previousState,name:"bmw",model:"f12"}})
                }}>click here</button>
        </>
    );
};
export default M1;