import React, { useContext } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import RentSavedPost from "../RentSavedPost/RentSavedPost";
import BuySavedPost from "../BuySavedPost/BuySavedPost";
import { AuthContext } from "../../../../../Providers/AuthProvider";

const SavedPost = () => {
  const { currentUser } = useContext(AuthContext);
  // console.log("Current User Saved Post: ",currentUser);

  return (
    <div>
      <div className="tabs  my-10  mt-20 md:mt-0 ">
        <Tabs defaultIndex={0} onSelect={(index) => console.log(index)}>
          <TabList className="tab">
            <Tab>Rent</Tab>
            <Tab>Buy</Tab>
          </TabList>
          <TabPanel className="">
            <RentSavedPost></RentSavedPost>
          </TabPanel>
          <TabPanel className="">
            <BuySavedPost></BuySavedPost>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default SavedPost;
