import React, { useRef } from 'react';

function Quiz() {
     var [n,setN]=React.useState([10])
     var inp=React.useRef()
     console.log( inp.current)
     React.useEffect(function(){
        inp.current.value=10
     },[])
    return (
        <center>
                    <div className='mybox1'>
            <h1>Setup Quiz</h1>
            
            <p>Number of questions</p>
            <input type="number"  ref={inp} style={{width:"300px"}}></input>
            <p>Category</p>
            <select style={{width:"300px"}}>
                <option>sports</option>
                <option value="">history</option>
                <option value="">politics</option>
            </select>
            <p>Select Difficulty</p>
            <select style={{width:"300px"}}>
                <option>easy</option>
                <option value="">medium</option>
                <option value="">hard</option>
            </select>
            <br></br>
            <br></br>
            
            <button style={{width:"300px"}}>Start</button>
        </div>
        </center>
    );
}

export default Quiz;