import './App.css';
import Countriesapi from './Countriesapi';
import Countriescard from './Countriescard';
import Countriestable from './Countriestable';
import Project from './Project';
function App() {
  return (
    <div className="mybox">
      <Countriesapi></Countriesapi>
      <Countriestable></Countriestable>
      <Countriescard></Countriescard>
      <Project h={"Best of Paris in 7 days tour"} mat={"Paris is synonymous with the finest things that culture can offer — in art,fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves<br></br> guide will immerse you in the very best of"}></Project>
    </div>
  );
}

export default App;
