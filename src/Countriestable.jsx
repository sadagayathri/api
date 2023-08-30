import React from "react";
import axios from 'axios';
function Countriestable(){
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
    var inp3=document.getElementById("inp3")
    var temp=[...countries]
    var s=temp.filter((country)=>{
        return (country.name.common.toUpperCase().startsWith(inp3.value.toUpperCase()))
        
    })
    setCountries([...s])
    
}
function search(){
    var inp4=document.getElementById("inp4")
    var temp=[...countries]
    var s=temp.filter((country)=>{
        return (country.name.common.toUpperCase().startsWith(inp4.value.toUpperCase()))
        
    })
    setCountries([...s])
    
}
    return(
    <div className="mybox">
        <button onClick={asc}>Ascending</button>
        <button onClick={des}>Descending</button>
        <input type="text" name="" id="inp3" />
        <button onClick={sr}>Search</button>
        <input type="text" name="" id="inp4" onKeyUp={search} />
        <br></br>
        <br></br>
        <table border={2}>
                    <thead>
                        <tr>
                        <th>Country Name</th>
                        <th>Population</th>
                        <th>Flag</th>
                        </tr>
                    </thead>
                    <tbody>
                 {
                countries.length>=0 && countries.map((country)=>{
                return  <tr>
                <td>{country.name.common}</td>
                <td>{country.population}</td>
                <td><img src={country.flags.svg} alt="" style={{width:"80px",padding:"5px"}}/></td>
                </tr>
                        
                      })
                    }
                    </tbody>

                 </table>
            
        
     
        
        
        </div>
    )
}
export default Countriestable;







