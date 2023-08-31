import axios from "axios";
import React, { useEffect } from "react";
function Countriestable(){
    var[y,setY]=React.useState([])
    React.useEffect(()=>{
    axios.get("https://restcountries.com/v3.1/all").then((res)=>{
        console.log(res.data)
        setY(res.data)
    })
    },[])
    function asc(){
        let countries=[...y]
        let n=countries.sort((a,b)=>{
            if(a.name.common>b.name.common){
                return 1;
            }
            else{
                return -1;
            }
        })
        setY(n);
    }
    

    function des(){
        let countries=[...y]
        let data=countries.sort((a,b)=>{
            if(a.name.common<b.name.common){
                return 1;
            }
            else{
                return -1;
            }
            return 0;
        })
        setY(data);
    }
    function sea(){
        var x=document.getElementById('d1')
        var z=[...y]
        var u=z.filter((b)=>{
            return (b.name.common.toUpperCase().startsWith(x.value.toUpperCase()))
        })
        setY(u)
        
    }

    return(
        <>
            <button onClick={()=>{asc()}}>Ascending</button>
            <button onClick={()=>{des()}}>Descending</button>
            <input type="text" id="d1"></input>
            <button onClick={()=>{sea()}}>Search</button>
            {
                <table border='2'>
                    <tr>
                        <th>Name</th>
                        <th>Population</th>
                        <th>Start of week</th>
                    </tr>
                    {
                        y.map((a)=>{
                            return <tr><td>{a.name.common}</td><td>{a.population}</td><td>{a.startOfWeek}</td></tr>
                        })
                    }
                </table>
                
            }
        </>
    )
}
export default Countriestable;