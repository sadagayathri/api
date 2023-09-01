import React,{ forwardRef } from "react";


var Address=React.forwardRef((props,ref1)=>{
    
        return (
            <div className='mybox'>
                <h1>Address</h1>
               <input type="text" name="" id=""  ref={ref1}/> 
            </div>
        );
    
    
})
export default Address;