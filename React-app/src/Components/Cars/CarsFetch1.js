import React from "react";
import carsInstance from "./CarsAPI";

const instance = carsInstance;

export const GetData = async (limits, page, setData, setError) => {
    try {
        if (limits && page) {
            instance.defaults.params = {
                page,
                limit: limits,
            };
        }
        const response = await instance.get('/cars');
        setData(response.data);
        console.log("hi")
        console.log(response.data);
    } catch (error) {
        setError('Error fetching data');
    }
};

const CarsFetch1 = () => {
    return (
        <div>
        </div>
    );
};

export default CarsFetch1;
