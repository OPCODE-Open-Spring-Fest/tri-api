import { Route, Routes } from "react-router-dom";
import NavbarCode from "./Components/Navbar/NavbarCode";
import HomeCode from "./Components/Home/HomeCode";
import CarsCode from "./Components/Cars/CarsCode";
import ImdbCode from "./Components/IMDB/ImdbCode";
import CurrencyCode from "./Components/Currency/CurrencyCode";

import FooterCode from "./Components/Footer/FooterCode";
import CarsAPI from "./Components/Cars/CarsAPI";
import CurrencyAPI from "./Components/Currency/CurrencyAPI";
import ImdbAPI from "./Components/IMDB/ImdbAPI";

function App() {
  return (
    <div>
      <NavbarCode />
      <Routes>
        
        <Route path="/" element={<HomeCode />} />
        <Route path="/cars" element={<CarsCode />} />
        <Route path="/imdb" element={<ImdbCode />} />
        <Route path="/currency" element={<CurrencyCode />} />

         {/* Added routes in Footer to the API's */}

        <Route path="/carsapi" element={<CarsAPI />} />
        <Route path="/currencyapi" element={<CurrencyAPI />} />
        <Route path="/imdbapi" element={<ImdbAPI />} />

      </Routes>
      <FooterCode/>
    </div>
  );
}

export default App;
