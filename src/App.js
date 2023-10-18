
import './App.css';
import Cards from './Cards';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TableEdit from './TableEdit';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Cards/>} ></Route>
          <Route path='tableEdit' element={<TableEdit/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
