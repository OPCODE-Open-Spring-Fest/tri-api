
import React, {useState} from 'react';
import CarsInput from './CarsInput';

const CarsCode = () => {

    const [showInput, setShowInput] = useState(false);

    const carsClickhandler=()=>{
        setShowInput(!showInput);
    }
  return (
    <div className="flex justify-center flex-col items-center ">
      <button onClick={carsClickhandler} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
        { showInput===true?'Close': 'Get Cars Data'}
       
      </button>
      {showInput && <CarsInput/>}
    </div>
  );
};

export default CarsCode;
