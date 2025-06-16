function Basicformreact(props){
    const mystyle={
        color:"red",
        backgroundColor:"black",
    }
    return(
   <>
 
   <h1 className="col">hello hi </h1>
   <h2 style={mystyle}>ahh good</h2>
   <h1 className="text">{props.name}</h1>
   <h1>{props.age}</h1>
   <h1>{props.year}</h1>
  <img src={props.picture}/>
   </>
    );
}
export default Basicformreact;