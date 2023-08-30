import './App.css';
import Countriesapi from './Countriesapi';
import Countriestable from './Countriestable';
function App() {
  return (
    <div className="mybox">
      <Countriesapi></Countriesapi>
      <Countriestable></Countriestable>
    </div>
  );
}

export default App;
