
import "./App.css";
import CarsCode from "./Components/Cars/CarsCode";
import HomePage from "./Components/Home/HomeCode";

import { Route, Routes } from "react-router-dom";

import NavbarCode from "./Components/Navbar/NavbarCode";


import ImdbCode from "./Components/IMDB/imdbCode";
import CurrencyCode from "./Components/Currency/CurrencyCode";

import FooterCode from "./Components/Footer/FooterCode";

function App() {
  return (

    <div className="App">
     

      <NavbarCode />
      <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route path="/cars" element={<CarsCode />} />
        <Route path="/imdb" element={<ImdbCode />} />
        <Route path="/currency" element={<CurrencyCode />} />

      </Routes>
      <FooterCode/>

    </div>
  );
}

export default App;
