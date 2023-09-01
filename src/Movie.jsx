import React from 'react';
import axios from 'axios';

function Movie() {
    React.useEffect(function(){
        axios.get('https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png')
        .then((res)=>{
            console.log(res)
        })
    },[])
    return (
        <div>
           hi 
        </div>
    );
}

export default Movie;