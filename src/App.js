import logo from './logo.svg';
import './App.css';
import Distribute from './components/distribute';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Cart from './components/Cart';
import Nav from './components/Nav';

function App() {
  return (
   <BrowserRouter>
   <Nav/>
   <Routes>
<Route path='/' element={<Distribute/>}/>
<Route path='cart' element={<Cart/>}/>

   </Routes>
    </BrowserRouter>
  );
}

export default App;
