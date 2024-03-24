import React, { useState } from "react";
import Loading from "../Reusable/Loading";


const CarsInput = () => {
  const [limits, setLimits] = useState("");
  const [page, setPage] = useState("");
  const [error, setError] = useState("");
  const [focusedInput, setFocusedInput] = useState(null);
  const [loading, setLoading] = useState(false); 
 
  const positiveIntegerRegex = /^\d+$/;

  const limitChangeContainer = (event) => {
    setLimits(event.target.value);
  };

  const pageClickChangeContainer = (event) => {
    setPage(event.target.value);
  };

  const sendDataHandler = () => {
    let limitsValue = limits.trim();
    let pagesValue = page.trim();

    if (!limitsValue || !pagesValue) {
      setError("Please enter values for both Limit and Page.");
     
    } else if (!positiveIntegerRegex.test(limitsValue) || !positiveIntegerRegex.test(pagesValue)) {
      setError("Kindly enter positive integer values only.");
     
    } else {
      setError("");
      setLoading(true); 
      
     
      setTimeout(() => {
        setLoading(false);  /// used to show the loading state
       
      }, 200); 
    }
  };

  const isDisabled = page && limits ? false : true;

  const handleInputFocus = (input) => {
    setFocusedInput(input);
    setError("");
  };

  return (
    <div className="flex bg-[white] items-top justify-center roundex-xl box-border m-10 mt-4 h-auto">
      <div className="flex bg-[#111827] text-center flex-col w-full md:w-auto text-[white] text-lg rounded-xl p-10 shadow-md">
        <div className="text-details te text-center mb-4">
          Enter the details to fetch from the cars API.
        </div>
        <div className="flex flex-col md:flex-row lg:gap-3 md:gap-3 p-2 md:p-2 sm:p-2 justify-center md:justify-between input-params-container">
          <input
            value={limits}
            onChange={limitChangeContainer}
            onFocus={() => handleInputFocus('limit')}
            id="limit-container"
            placeholder="Enter Limit"
            className="block w-full md:w-auto px-4 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 text-[#1E1E24]"
          />
          <input
            value={page}
            onChange={pageClickChangeContainer}
            onFocus={() => handleInputFocus('page')}
            id="page-container"
            placeholder="Enter Page"
            className="block w-full md:w-auto px-4 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 mt-4 md:mt-0 text-[#1E1E24]"
          />
        </div>
        {!isDisabled && (
          <>
            <button
              onClick={sendDataHandler}
              className="bg-blue-500 mt-1 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-lg w-full md:w-auto"
              disabled={loading} 
            >
              {loading ? <Loading/> : "Fetch"}
            </button>
          </>
        )}

        {error && focusedInput && <div className="text-center mt-2 text-[#FF204E]">{error}</div>}
      </div>
    </div>
  );
};

export default CarsInput;
