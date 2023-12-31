import React from "react";
import axios from 'axios';
function Countriesapi(){
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
function search(){
    var inp2=document.getElementById("inp2")
    var temp=[...countries]
    var s=temp.filter((country)=>{
        return (country.name.common.toUpperCase().startsWith(inp2.value.toUpperCase()))
        
    })
    setCountries([...s])
    
}
    return(
    <div className="mybox">
        <button onClick={asc}>Ascending</button>
        <button onClick={des}>Descending</button>
        <input type="text" name="" id="inp1" />
        <button onClick={sr}>Search</button>
        <input type="text" name="" id="inp2" onKeyUp={search} />
        <br></br>
       
        {
            countries.length>=0 && countries.map((country)=>{
                return <li>{country.name.common}</li>
            })
        }
     
        
        
        </div>
    )
}
export default Countriesapi;







