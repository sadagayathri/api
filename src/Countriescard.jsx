import React from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
function Countriescard(){
var [countries,setCountries]=React.useState([])
React.useEffect(()=>{
    axios.get("https://restcountries.com/v3.1/all")
    .then((res)=>{
       console.log(res)
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
    var inp5=document.getElementById("inp5")
    var temp=[...countries]
    var s=temp.filter((country)=>{
        return (country.name.common.toUpperCase().startsWith(inp5.value.toUpperCase()))
        
    })
    setCountries([...s])
    
}
function search(){
    var inp6=document.getElementById("inp6")
    var temp=[...countries]
    var s=temp.filter((country)=>{
        return (country.name.common.toUpperCase().startsWith(inp6.value.toUpperCase()))
        
    })
    setCountries([...s])
    
}
    return(
    <div className="mybox">
        <button onClick={asc}>Ascending</button>
        <button onClick={des}>Descending</button>
        <input type="text" name="" id="inp5" />
        <button onClick={sr}>Search</button>
        <input type="text" name="" id="inp6" onKeyUp={search} />
        <br></br>
                 {
                countries.length>=0 && countries.map((country)=>{
                 return <div className="design" >
                  <div class="card" style={{width:"18rem",height:"auto"}}>
                 <img src={country.flags.svg} style={{width:"100%",padding:"5px"}} alt="" />
                 <div class="card-body">
                     <p><b>Country Name:</b>{country.name.common}</p>
                     <p><b>Population:</b>{country.population}</p>
                 </div>
             </div>
             </div>
                 
                 
             
                    
                 
            
                })
            }
     
        
        
        </div>
    )
}
export default Countriescard;







