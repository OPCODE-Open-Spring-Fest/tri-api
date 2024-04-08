import React, { useState } from "react";
import Loading from "../Reusable/Loading";
import { GetData } from "./CarsFetch1";

const CarsInput = () => {
  const [limits, setLimits] = useState("");
  const [page, setPage] = useState("");
  const [error, setError] = useState("");
  const [fetchError, setFetchError] = useState("");
  const [dataFetched, setFetcheddata] = useState([]);
  const [focusedInput, setFocusedInput] = useState(null);
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(6);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = dataFetched.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(dataFetched.length / rowsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const positiveIntegerRegex = /^\d+$/;

  const limitChangeContainer = (event) => {
    setFetchError("");
    setFetcheddata([]);
    setLimits(event.target.value);
  };

  const pageClickChangeContainer = (event) => {
    setFetchError("");
    setFetcheddata([]);
    setPage(event.target.value);
  };

  const sendDataHandler = async () => {
    setFetcheddata([]);
    let limitsValue = limits.trim();
    let pagesValue = page.trim();

    if (!limitsValue || !pagesValue) {
      setError("Please enter values for both Limit and Page.");
      return;
    } else if (
      !positiveIntegerRegex.test(limitsValue) ||
      !positiveIntegerRegex.test(pagesValue)
    ) {
      setError("Kindly enter positive integer values only.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      await GetData(limitsValue, pagesValue, setFetcheddata, setFetchError);
    } catch (error) {
      // setFetchError('Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  const isDisabled = !page || !limits;

  const handleInputFocus = (input) => {
    setFocusedInput(input);
    setError("");
  };

  return (
    <div
      className={
        dataFetched.length === 0
          ? "flex bg-[white] items-top justify-center roundex-xl box-border m-10 mt-4"
          : "flex bg-[white] items-top justify-center roundex-xl box-border m-10 mt-4 h-[43rem]"
      }
    >
      <div className="flex bg-[#111827] text-center flex-col w-full md:w-auto text-[white] text-lg rounded-xl p-10 shadow-md">
        <div className="text-details te text-center mb-4">
          Enter the details to fetch from the cars API.
        </div>
        <div className="flex flex-col md:flex-row lg:gap-3 md:gap-3 p-2 md:p-2 sm:p-2 justify-center md:justify-between input-params-container">
          <input
            value={limits}
            onChange={limitChangeContainer}
            onFocus={() => handleInputFocus("limit")}
            id="limit-container"
            placeholder="Enter Limit"
            className="block w-full md:w-auto px-4 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 text-[#1E1E24]"
          />
          <input
            value={page}
            onChange={pageClickChangeContainer}
            onFocus={() => handleInputFocus("page")}
            id="page-container"
            placeholder="Enter Page"
            className="block w-full md:w-auto px-4 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 mt-4 md:mt-0 text-[#1E1E24]"
          />
        </div>
        <button
          onClick={sendDataHandler}
          className={
            !isDisabled
              ? "bg-blue-500 mx-2 mt-1 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-lg w-full md:w-auto"
              : "bg-blue-500 mx-2 mt-1 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-lg w-full md:w-auto opacity-50 cursor-not-allowed"
          }
          disabled={isDisabled || loading}
        >
          {loading ? <Loading /> : "Fetch"}
        </button>

        {error && focusedInput && (
          <div className="text-center mt-2 text-[#FF204E]">{error}</div>
        )}
        {fetchError && (
          <div className="text-center mt-2 text-[#FF204E]">{fetchError}</div>
        )}

        {dataFetched.length > 0 && (
          <div className="flex flex-col h-full">
            <div className="relative overflow-x-auto mt-5 mx-3 rounded-lg flex-grow overflow-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Brand
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Model
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Type
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Year
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentRows.map((car, index) => (
                    <tr
                      key={index}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {car.make}
                      </th>
                      <td className="px-6 py-4">{car.model}</td>
                      <td className="px-6 py-4">{car.type}</td>
                      <td className="px-6 py-4">{car.year}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-center mt-4">
              {pageNumbers.map((pageNumber) => (
                <button
                  key={pageNumber}
                  onClick={() => handlePageChange(pageNumber)}
                  className={`mx-1 px-3 py-1 rounded-md ${
                    currentPage === pageNumber
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {pageNumber}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarsInput;