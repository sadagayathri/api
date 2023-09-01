import React, { useRef } from 'react';
import Address from './Address';

function Controlledcom() {
    var firstnameref=React.useRef()
    React.useEffect(()=>{
        firstnameref.current.focus()

    },[])
    var lastnameref=React.useRef()
    var addressref=React.useRef()
    
    function focuslastname(ev){
        if(ev.key==='Enter'){
            lastnameref.current.focus()
        }
    }
    function focusaddress(ev){
        if(ev.key==='Enter'){
            addressref.current.focus()
        }
    }
    return (
        <div className='mybox'>
            <h1>Welcome to Edupoly ReactJS</h1>
            Firstname: <input type="text" name="" id="" ref={firstnameref} onKeyUp={(ev)=>{focuslastname(ev)}} /><br></br>
           Lastname: <input type="text" name="" id="" ref={lastnameref} onKeyUp={(ev)=>{focusaddress(ev)}} />
            <Address ref={addressref}></Address>
        </div>
    );
}

export default Controlledcom;