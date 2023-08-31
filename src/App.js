import './App.css';
import Countriesapi from './Countriesapi';
import Countriescard from './Countriescard';
import Countriestable from './Countriestable';
import Project from './Project';
import Accordion from './Accordion';
function App() {
  return (
    <div className="mybox">
      <Countriesapi></Countriesapi>
      <Countriestable></Countriestable>
      <Countriescard></Countriescard>
      <Project></Project>
      <Accordion></Accordion>
    </div>
  );
}

export default App;
