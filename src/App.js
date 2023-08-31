import React, { useContext } from 'react';
import './App.css';
import Countriesapi from './Countriesapi';
import Countriescard from './Countriescard';
import Countriestable from './Countriestable';
import 'bootstrap/dist/css/bootstrap.min.css';
import Project from './Project';
import Reviews from './Reviews';
// import First from './First';
// import Second from './Second';
// import Third from './Third';
function App() {
  // var [xy,setXy]=React.useState(10)
  // var ex=React.useContext("fvyuh")
  return (
    
    // <exContext.provider value={200}>
    <div className="mybox">
      <Countriesapi></Countriesapi>
      <Countriestable></Countriestable>
      <Countriescard></Countriescard>
      <Project></Project>
      <Reviews></Reviews>
      {/* <First></First> */}
    </div>
    // </exContext.provider>
  );
}

export default App;
