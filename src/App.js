// import logo from './logo.svg';
import './App.css';
// import Boot from './Boot';
import {Routes,Route} from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Lrarn from './Lrarn';

//Routes,Route
function App() {
  return (
   
  //  <div>
  //  <Boot></Boot>
  //  </div>

  <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
<Route path="/Lrarn" element={<Lrarn/>}/>
  </Routes>
    
  );
}

export default App;
