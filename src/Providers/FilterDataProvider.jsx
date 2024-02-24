import React, { createContext, useContext, useState } from 'react';
import { AuthContext } from './AuthProvider';


export const FilterDataContext=createContext("")
const FilterDataProvider = ({children}) => {

    const [byFilter,setByFilter]=useState(false)

   
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(10000000);

    const [selectedRentCategory, setSelectedRentCategory] = useState([]);
    const [selectedBathrooms, setSelectedBathrooms] = useState([]);
    const [selectedBedrooms, setSelectedBedrooms] = useState([]);



    ////Property
    const [selectedCategoriesBuySort,setSelectedCategoriesBuySort]=useState([])

    const filterDataContextInfo={
        byFilter,setByFilter,
        selectedRentCategory,setSelectedRentCategory,
        selectedBathrooms,setSelectedBathrooms,
        selectedBedrooms,setSelectedBedrooms,
        minPrice,setMinPrice,maxPrice,setMaxPrice,
        ////Property
        selectedCategoriesBuySort,setSelectedCategoriesBuySort,
     
    }
    return (
        <FilterDataContext.Provider value={filterDataContextInfo}>
            {children}
        </FilterDataContext.Provider>
    );
};

export default FilterDataProvider;