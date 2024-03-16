import React, { useContext, useState } from 'react';
import { FaCheckCircle, FaCircle, FaPlus } from 'react-icons/fa';
import { FilterDataContext } from '../../../../Providers/FilterDataProvider';

const CategoryContentProSort = () => {

   

    const {selectedCategoriesBuySort, setSelectedCategoriesBuySort} = useContext(FilterDataContext);

    const categories=["House","Flat","Land","Plot"]
    // const [selectedCategories, setSelectedCategories] = useState("House");

     const handleButtonClick = (category) => {
        if (selectedCategoriesBuySort.includes(category)) {
            setSelectedCategoriesBuySort(
            selectedCategoriesBuySort.filter((item) => item !== category)
          );
        } else {
            setSelectedCategoriesBuySort([...selectedCategoriesBuySort, category]);
        }
      };
    // console.log("Sorting Property Category**************************",selectedCategoriesBuySort);

    return (
        <div>
                <div className='max-w-screen-lg mx-auto flex justify-center flex-wrap gap-4 my-8'>
                        {categories.map((rentCategory, index) => (
                        <div key={index} className="flex items-center  p-2 rounded-md">
                            <button
                            onClick={() => handleButtonClick(rentCategory)}
                                className={`flex items-center btn btn-outline btn-sm ${
                                    selectedCategoriesBuySort.includes(rentCategory)
                                    ? "border-blue-600 border-2"
                                    : ""
                                }`}
                            
                                >
                                {selectedCategoriesBuySort.includes(rentCategory) ? (
                                    <FaCheckCircle className="text-blue-500" />
                                ) : (
                                    <FaCircle className='text-[#DFDDDD]'/>
                                )}
                                <span className="ml-2">{rentCategory}</span>
                            </button>
                        </div>
                    ))}
                </div>


           
        </div>
    );
};

export default CategoryContentProSort;