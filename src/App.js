
// import Counter from './Component/day1/ClassCompo';
// import Parent from './Component/day2/parent';
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import Home from './Components/day2/home'
// import About from './Components/day2/about'
import State from './Component/day3/State';
import EventHandling from './Component/day3/Effect';

function App() {
  return (
    <div>
      {/* <PtoC/>
      <BrowserRouter>
      <Routes>
        <Route path = '/Home' element = {<Home/>}/>
        <Route path = '/About' element = {<About/>}/>
        <Route path = '*' element = {<Notfound/>}/>
      </Routes>
      </BrowserRouter> */}
      <State/>
      <EventHandling/>
    </div>
  );
}

export default App;
