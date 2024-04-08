import React, { useState, useEffect } from "react"
import currencyInstance from "./CurrencyAPI"

const CurrencyCode = () => {

  const CurrencyDataBlock = () => {

    const [currencyData, setCurrencyData] = useState(null);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await currencyInstance.get('/supportedCurrencies');
          setLoading(false)
          setCurrencyData(response.data)
        } catch (error) {
          console.error(error);
          setError(true)
        }
      };

      fetchData();
    }, []);

    return (
      <div>
        {error ? (<div className="text-center"><div>Failed to fetch :( </div> <div>Please check your internet connection </div></div>) :
          loading ? (
            <div id="loadingAnimation" className="mt-4 rounded-full border-t-4 border-b-4 border-blue-500 h-12 w-12 animate-spin"> </div>
          ) : (
            <div id="currencyTable" className="overflow-x-auto border border-gray-300 mt-4 rounded-lg shadow-md">
              <table className="min-w-full bg-white shadow-md border-collapse">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    <th className="px-4 py-2">Index</th>
                    <th className="px-4 py-2">Currency</th>
                    <th className="px-4 py-2">Symbol</th>
                  </tr>
                </thead>
                <tbody className="text-gray-500 ">
                  {currencyData.map((currency, index) => (
                    <tr key={index} className="border-t odd:bg-white even:bg-slate-50 hover:bg-blue-50">
                      <td className="px-4 py-2">{index}</td>
                      <td className="px-4 py-2">{currency.name}</td>
                      <td className="px-4 py-2">{currency.symbol}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
      </div>
    )
  }

  const [showInput, setShowInput] = useState(false);
  const currencyClickHandler = () => {
    setShowInput(!showInput);
  }

  return (
    <div>
      <div className="flex justify-center">
        <button onClick={currencyClickHandler} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
          {showInput ? "Close" : "Get Currency Data"}</button>
      </div>
      <div className="flex justify-center mt-4">
        {showInput && <CurrencyDataBlock />}
      </div>
    </div>
  )
}

export default CurrencyCode
