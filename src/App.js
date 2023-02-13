import './App.css';
import MainFull from './PageSources/MainPage/MainFull/MainFull';
import {Routes, Route} from 'react-router-dom'
import SecondFull from './PageSources/SecondPage/SecondFull/SecondFull';
import ThirdFirst from './PageSources/ThirdPage/ThirdComponents/ThirdFirst';
import ThirdFull from './PageSources/ThirdPage/ThirdFull/ThirdFull';
import FourtFull from './PageSources/FourthPage/FourthFull/FourthFull';
import Exercise from './PageSources/exercise/exercise';
import { useState } from 'react';
import Example from './PageSources/exercise/options';
import SS from './PageSources/exercise/sc';
import Cv from './PageSources/CV/Cv';
function App() {
  const [select, setSelect] = useState("")
  return (
    <div className='bg'>
      <Routes>
        <Route path='/' element={<MainFull />}></Route>
        <Route path='/Private-Info' element={<SecondFull />}></Route>
        <Route path='/Experience' element={<ThirdFull />}> </Route>
        <Route path='/Education' element={<FourtFull />}></Route>
        <Route select={select} setSelect={setSelect} path='excersize' element={<Exercise />}></Route>
        <Route path='add' element={<Example />}></Route>
        <Route path='ss' element={<SS />}></Route>
        <Route path='ll' element={<Cv />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
