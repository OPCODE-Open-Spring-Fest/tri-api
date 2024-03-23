
import { NavLink } from "react-router-dom";

const NavbarCode = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>

        {/* Linked to their particular api */}
        
        <li>
          <NavLink to="/cars">Cars</NavLink>
        </li>
        <li>
          <NavLink to="/imdb">IMDB</NavLink>
        </li>
        <li>
          <NavLink to="/currency">Currency</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarCode;
