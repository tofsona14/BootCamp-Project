import './App.css';
import MainFull from './PageSources/MainPage/MainFull/MainFull';
import {Routes, Route} from 'react-router-dom'
import SecondFull from './PageSources/SecondPage/SecondFull/SecondFull';
import ThirdFirst from './PageSources/ThirdPage/ThirdComponents/ThirdFirst';
function App() {
  return (
    <div className='bg'>
      <Routes>
        <Route path='/' element={<MainFull />}></Route>
        <Route path='/Private-Info' element={<SecondFull />}></Route>
        <Route path='/Experience' element={<ThirdFirst />}> </Route>
      </Routes>
      
    </div>
  );
}

export default App;
