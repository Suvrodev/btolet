import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import RentMyPost from '../RentMyPost/RentMyPost';
import BuyMyPost from '../BuyMyPost/BuyMyPost';

const MyPost = () => {
    return (
        <div>
           <div className='tabs  font-bold my-10 '>
                <Tabs defaultIndex={0} onSelect={(index) => console.log(index)}>
                    <TabList className='tab'>
                        <Tab>Rent</Tab>
                        <Tab>Buy</Tab>
                    </TabList>
                    <TabPanel className='tab'>
                        <RentMyPost></RentMyPost>
                    </TabPanel>
                    <TabPanel className='tab'>
                        <BuyMyPost></BuyMyPost>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default MyPost;