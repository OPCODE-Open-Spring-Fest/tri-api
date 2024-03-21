import { NavLink } from "react-router-dom";
export default function NavbarCode(){

    return (
        <div>
       
        <ul> 
        <li><NavLink to="/Cars">Cars</NavLink></li>
        <li><NavLink to="/Currency">Currency</NavLink></li>
        <li><NavLink to="/">Home</NavLink></li>       
        <li><NavLink to="/IMDB">IMDB</NavLink></li>
        </ul> 
        </div>
    )
}