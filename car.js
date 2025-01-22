import { useState } from "react";

function Car(){
   const[car,setcar]=useState(
    {
      color:"white",
      brand:"bmw",
      year:"2022",
    }
   );
   const updatefun = ()=>{
      setcar({
         color:"red",
         brand:"benz",
         year:"2025",
      });
   }
   return (
     <>
       <h1>my fav color is {car.color}</h1>
       <h1>my fav model is {car.year}</h1>
       <h1>my fav brand is {car.brand}</h1>
       <button onClick={updatefun}>click here</button>
     </>
   );
}
export default Car; 
{
  /*this code for state using object*/
}