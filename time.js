import {useEffect} from "react";
import {useState} from "react";
const App2= () =>{
    const [num1,setnum1]=useState(100);
    const [num2,setnum2]=useState(100);

    useEffect(()=>{
        
        console.log("from use effect");
    },[num1,num2]);
    return (
      <>
        <h1>{num1}</h1>
        <button onClick={() =>setnum1((curr)=>curr + 1)}>add</button>
        <h1>{num2}</h1>
        <button onClick={() =>setnum2((curr)=>curr + 1)}>add</button>
      </>
    );
};
export default App2;
{
  /*this code for state effect*/
}