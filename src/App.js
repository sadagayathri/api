import './App.css';
import Countriesapi from './Countriesapi';
import Countriescard from './Countriescard';
import Countriestable from './Countriestable';
import 'bootstrap/dist/css/bootstrap.min.css';
import Shopping from './Shopping';
import Project from './Project';
function App() {
  return (
    <div className="mybox">
      <Shopping></Shopping>
      <Countriesapi></Countriesapi>
      <Countriestable></Countriestable>
      <Countriescard></Countriescard>
      <Project></Project>
      
    </div>
  );
}

export default App;
