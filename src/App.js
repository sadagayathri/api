import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Countriesapi from './Countriesapi';
// import Countriescard from './Countriescard';
// import Countriestable from './Countriestable';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Shopping from './Shopping';
// import Project from './Project';
// import Movie from './Movie';
import Quiz from './Quiz';
import History from './History';
function App() {
  return (
    <div className="mybox">
      <Quiz></Quiz>
      {/* <Movie></Movie>
      <Shopping></Shopping>
      <Countriesapi></Countriesapi>
      <Countriestable></Countriestable>
      <Countriescard></Countriescard>
      <Project></Project> */}
      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Quiz />}>
          
          <Route path="quiz" element={<Quiz />} />
          <Route path="history" element={<History />} />
        </Route>
      </Routes>
    </BrowserRouter> */}
      
    </div>
  );
}

export default App;
