import './App.css';
import Countriesapi from './Countriesapi';
import Countriescard from './Countriescard';
import Countriestable from './Countriestable';
import Shopping from './Shopping';
import Project from './Project';
function App() {
  return (
    <div className="mybox">
      <Countriesapi></Countriesapi>
      <Countriestable></Countriestable>
      <Countriescard></Countriescard>
      <Project></Project>
      <Shopping></Shopping>
    </div>
  );
}

export default App;
