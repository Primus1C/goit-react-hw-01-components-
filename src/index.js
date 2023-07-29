import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import userData from "./data/user.json";
import data from "./data/data.json";

const Profile = () => {
    return (
        <div class="profile">
            <div class="description">
                <img src={userData.avatar} alt="User avatar" class="avatar" />
                <p class="name">{userData.username}</p>
                <p class="tag">{userData.tag}</p>
                <p class="location">{userData.location}</p>
            </div>

            <ul class="stats">
                <li>
                    <span class="label">Followers</span>
                    <span class="quantity">{userData.stats.followers}</span>
                </li>
                <li>
                    <span class="label">Views</span>
                    <span class="quantity">{userData.stats.views}</span>
                </li>
                <li>
                    <span class="label">Likes</span>
                    <span class="quantity">{userData.stats.likes}</span>
                </li>
            </ul>
        </div>
    );
};

const Statistics = () => {};

const FriendList = () => {};

const FriendListItem = () => { };

const TransactionHistory = () => {};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Profile />);
