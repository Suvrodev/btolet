import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import RentMyPost from '../RentMyPost/RentMyPost';
import BuyMyPost from '../BuyMyPost/BuyMyPost';

const MyPost = () => {
    return (
        <div>
           <div>
                <Tabs defaultIndex={0} onSelect={(index) => console.log(index)}>
                    <TabList>
                        <Tab>Rent</Tab>
                        <Tab>Buy</Tab>
                    </TabList>
                    <TabPanel>
                        <RentMyPost></RentMyPost>
                    </TabPanel>
                    <TabPanel>
                        <BuyMyPost></BuyMyPost>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default MyPost;