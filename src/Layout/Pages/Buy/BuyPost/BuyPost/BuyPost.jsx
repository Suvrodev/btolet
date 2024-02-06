import React, { useState } from 'react';
import HomeFlat from '../HomeFlat/HomeFlat';
import Land from '../Land/Land';
import BuyCommonPost from '../../../BuyRentCommonPost/BuyCommonPost/BuyCommonPost';
import ShortAddress from '../../../BuyRentCommonPost/ShortAddress/ShortAddress';
import Description from '../../../BuyRentCommonPost/Description/Description';
import YourDetails from '../../../BuyRentCommonPost/Your Details/YourDetails';

const BuyPost = () => {
    
    const [category,setCategory]=useState("")
    const categories=["House","Flat","Land","Plot"]
    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (index) => {
      setSelectedButton(index);
      setCategory(categories[index])
    };

    console.log("Category: ",category);

    let componentToRender = null;
    switch (category) {
        case 'House':
          componentToRender = <HomeFlat />;
          break;
        case 'Flat':
          componentToRender = <HomeFlat />;
          break;
        case 'Land':
          componentToRender = <Land />;
          break;
        case 'Plot':
          componentToRender = <Land />;
          break;
        default:
          componentToRender = null;
      }

    
    return (
        <div>
           <h1 className='text-2xl font-bold roboto'>Category</h1>
                <div className='flex gap-5 my-4 justify-center'>
                    {categories.map((category, index) => (
                            <button
                                key={index}
                                onClick={() => handleButtonClick(index)}
                                className={`btn    ${selectedButton===index?'btn-primary':'btn-outline btn-info'}`}
                                >
                            {category}
                            </button>
                        ))}
                </div>
                {
                    componentToRender
                }

                <ShortAddress></ShortAddress>
                <Description></Description>
                <YourDetails></YourDetails>

               {/* <BuyCommonPost></BuyCommonPost> */}
        </div>
    );
};

export default BuyPost;