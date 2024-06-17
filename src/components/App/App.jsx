import React from "react";

import "./App.css"

import userData from "../../db/userData.json";
import friends from "../../db/friends.json";
import transactions from "../../db/transactions.json";

import { Profile } from "../Profille/Profile";
import { FriendList } from "../FriendList/FriendList";
import { TransactionHistory } from "../TransactionHistory/TransactionHistory";

 const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      {!!friends.length && <FriendList friends={friends} />}
      
      {!!transactions.length && <TransactionHistory transactions={transactions}/>}
      
    </>
  );
};

export default App
