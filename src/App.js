import './App.css';
import MainFull from './PageSources/MainPage/MainFull/MainFull';
import {Routes, Route} from 'react-router-dom'
import SecondHeader from './PageSources/SecondPage/SecondComponents/SecondHeader';
function App() {
  return (
    <div className='bg'>
      <Routes>
        <Route path='/' element={<MainFull />}></Route>
        <Route path='/General-Info' element={<SecondHeader />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
