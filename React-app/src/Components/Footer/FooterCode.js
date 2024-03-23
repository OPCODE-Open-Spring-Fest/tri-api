import { Link } from "react-router-dom";


const Footer = () => {
    return (
      <>
        <div className="mt-8 w-full bg-black px-8 md:px-[300px] flex md:flex-row flex-col space-y-6 md:space-y-0 items-start md:justify-between text-sm md:text-md py-8 ">
          <div className="flex flex-col text-white">
            <p>Easy Issues</p>
            <p>Medium Issues</p>
            <p>Hard Issues</p>
          </div>
  
          <div className="flex flex-col text-white">
            <p>
                <Link to="/carsapi">Cars API</Link>
            </p>
            <p>
                <Link to="/currencyapi">Currency API</Link>
            </p>
            <p>
                <Link to="/imdbapi">IMDB API</Link>
            </p>
          </div>
  
          <div className="flex flex-col text-white">
            <p>Privacy Policy</p>
            <p>About Us</p>
            <p>Terms & Conditions</p>
            <p>Terms of Service</p>
          </div>
        </div>
        <p className="py-2 pb-6 text-center text-white bg-black text-sm">
          All rights reserved @Open Spring Fest 2023
        </p>
      </>
    );
  };
  
  export default Footer;
  