import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import user from "./data/user.json";
import data from "./data/data.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";

import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
    />
);
root.render(<Statistics stats={data} />);
