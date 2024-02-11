import React, { useContext } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import RentSavedPost from '../RentSavedPost/RentSavedPost';
import BuySavedPost from '../BuySavedPost/BuySavedPost';
import { AuthContext } from '../../../../../Providers/AuthProvider';

const SavedPost = () => {

    const {currentUser}=useContext(AuthContext)
    // console.log("Current User Saved Post: ",currentUser);

    return (
        <div>

            <h1>Saved Post</h1>
            <div className='tabs text-center font-bold my-10'>
            <Tabs defaultIndex={0} onSelect={(index) => console.log(index)}>
                <TabList classID='flex justify-center gap-5'>
                    <Tab>Rent</Tab>
                    <Tab>Buy</Tab>
                </TabList>
                <TabPanel>
                    <RentSavedPost></RentSavedPost>
                </TabPanel>
                <TabPanel>
                    <BuySavedPost></BuySavedPost>
                </TabPanel>
            </Tabs>
            </div>
        </div>
    );
};

export default SavedPost;