import M1 from "./message";
import React from "react";

function Trans(){
    const inf ={
        name:"vicky",
        age:18,
        gender:"male",
    };
return(
    <>
    <M1
    name={inf.name}
    age={inf.age}
    gender={inf.gender}
    />
    </>
);
};
export default Trans;
