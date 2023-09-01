import './App.css';
import Countriesapi from './Countriesapi';
import Countriescard from './Countriescard';
import Countriestable from './Countriestable';
import Project from './Project';
import First from './First';
import Mycontext from './Mycontext';
import React from 'react';
function App() {
  var [x,setX]=React.useState(102)
  return (
    <Mycontext.Provider value={999}>
      <div className="mybox">
      <Countriesapi></Countriesapi>
      <Countriestable></Countriestable>
      <Countriescard></Countriescard>
      <Project></Project>
      <First></First>
    </div>
   </Mycontext.Provider>
    
  );
}

export default App;
