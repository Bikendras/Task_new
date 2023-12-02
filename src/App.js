
import './App.css';
import Cards from './Cards';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TableEdit from './TableEdit';
import Navbar from './Navbar';
import TableDataShow from './TableDataShow';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar/>}>
          <Route index element={<Cards/>} ></Route>
          <Route path='tableEdit' element={<TableEdit/>}></Route>
          <Route path='tableShow' element={<TableDataShow/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
