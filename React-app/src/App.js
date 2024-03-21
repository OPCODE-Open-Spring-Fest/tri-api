import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { BrowserRouter, NavLink } from "react-router-dom";
import Home from "./Components/Home/HomeCode";
import Navbar from "./Components/Navbar/NavbarCode";
import Currency from "./Components/Currency/CurrencyCode";
import IMDB from "./Components/IMDB/imdbCode";
import Cars from "./Components/Cars/CarsCode";




function App() {
 

  return (
    <div>
    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="/Cars" element={<Cars/> } />
        <Route path="/Currency" element={<Currency/> } />
        <Route path="/IMDB" element={<IMDB/> } />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
