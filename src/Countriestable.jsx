import React from "react";
import axios from 'axios';
function Countriestable(){
var [countries,setCountries]=React.useState([])
React.useEffect(()=>{
    axios.get("https://restcountries.com/v3.1/all")
    .then((res)=>{
       
        setCountries([...res.data])
    })
},[])
function asc(){
  
 var temp=[...countries]
  var x=temp.sort((a,b)=>{return a.name.common<b.name.common?(-1):(1)})
  setCountries([...x])
// var n= temp.sort((a,b)=>{
//     if(a.name.common<b.name.common){
//         return -1
//     }
//     else {
//         return 1
//     }
  
//  })
//  setCountries(n)
}
function des(){
 var temp=[...countries]
  var x=temp.sort((a,b)=>{return a.name.common<b.name.common?(1):(-1)})
  setCountries([...x])
}
function sr(){
    var inp1=document.getElementById("inp1")
    var temp=[...countries]
    var s=temp.filter((country)=>{
        return (country.name.common.toUpperCase().startsWith(inp1.value.toUpperCase()))
        
    })
    setCountries([...s])
    
}
    return(
    <div>
        <button onClick={asc}>Ascending</button>
        <button onClick={des}>Descending</button>
        <input type="text" name="" id="inp1" />
        <button onClick={sr}>Search</button>
        <br></br>
       
        {
            countries.length>=0 && countries.map((country)=>{
                return <li>{country.name.common}</li>
            })
        }
     
        
        
        </div>
    )
}
export default Countriestable;







