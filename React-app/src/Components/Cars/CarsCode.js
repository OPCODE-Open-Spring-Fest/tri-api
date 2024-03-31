
import React, {useState} from 'react';
import CarsInput from './CarsInput';
import CarsFetch1 from './CarsFetch1';

const CarsCode = () => {

    const [showInput, setShowInput] = useState(false);

    const carsClickhandler=()=>{
        setShowInput(!showInput);
    }
  return (
    <div className='flex flex-col justify-center items-center'>
    <div className="flex justify-center flex-col items-center ">
      <button onClick={carsClickhandler} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
        { showInput===true?'Close': 'Get Cars Data'}
       
      </button>
      {showInput && <CarsInput/>}
    </div>

   { <div>
       <CarsFetch1 />
    </div>}
    </div>
  );
};

export default CarsCode;
