import logo from './logo.svg';
import './App.css';
import Cards from './Cards';
import AddData from './AddData';
import {BrowserRouter,Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Cards/>} ></Route>
          <Route path='nextpage' element={<AddData/>} ></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
