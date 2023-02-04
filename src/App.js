import './App.css';
import MainFull from './PageSources/MainPage/MainFull/MainFull';
import {Routes, Route} from 'react-router-dom'
import SecondFull from './PageSources/SecondPage/SecondFull/SecondFull';
function App() {
  return (
    <div className='bg'>
      <Routes>
        <Route path='/' element={<MainFull />}></Route>
        <Route path='/General-Info' element={<SecondFull />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
