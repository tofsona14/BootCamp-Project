import './App.css';
import MainFull from './PageSources/MainPage/MainFull/MainFull';
import {Routes, Route} from 'react-router-dom'
import SecondFull from './PageSources/SecondPage/SecondFull/SecondFull';
import ThirdFirst from './PageSources/ThirdPage/ThirdComponents/ThirdFirst';
import ThirdFull from './PageSources/ThirdPage/ThirdFull/ThirdFull';
import FourtFull from './PageSources/FourthPage/FourthFull/FourthFull';
import DropDown from './PageSources/DropDownMenu/DropDown';
import { useState } from 'react';
function App() {
  const [select, setSelect] = useState("")
  return (
    <div className='bg'>
      <Routes>
        <Route path='/' element={<MainFull />}></Route>
        <Route path='/Private-Info' element={<SecondFull />}></Route>
        <Route path='/Experience' element={<ThirdFull />}> </Route>
        <Route path='/Education' element={<FourtFull />}></Route>
        <Route select={select} setSelect={setSelect} path='DropDown' element={<DropDown />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
