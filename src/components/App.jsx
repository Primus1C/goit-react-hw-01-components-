import React from "react";

import user from "../data/user.json";
import data from "../data/data.json";
import friends from "../data/friends.json";
import transactions from "../data/transactions.json";

import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory"; 

// ================= Task 1
const App = () => {
    return (
        <div className="container">{
            <Profile
                username={user.username}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />
        }</div>
    )
}
  
// ================= Task 2
const App2 = () => {
    return (
        <div className="container">{
            <Statistics
                stats={data}
            />
        }</div>
    )
}

// ================= Task 3
const App3 = () => {
    return (
        <div className="container">{
            <FriendList friends={friends}
            />
        }</div>
    )
}

// ================= Task 4
const App4 = () => {
    return (
        <div className="container">{
            <TransactionHistory items={transactions}
            />
        }</div>
    )
}

export default App