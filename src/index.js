import React from "react";
import ReactDOM from "react-dom/client";
//import "./index.css";



const Card = (user) => {
        return (
            <div class="profile">
                <div class="description">
                    <img
                        src={user.avatar}
                        alt="User avatar"
                        class="avatar"
                    />
                    <p class="name">Petra Marica</p>
                    <p class="tag">@pmarica</p>
                    <p class="location">Salvador, Brasil</p>
                </div>

                <ul class="stats">
                    <li>
                        <span class="label">Followers</span>
                        <span class="quantity">1000</span>
                    </li>
                    <li>
                        <span class="label">Views</span>
                        <span class="quantity">2000</span>
                    </li>
                    <li>
                        <span class="label">Likes</span>
                        <span class="quantity">3000</span>
                    </li>
                </ul>
            </div>
        )
    }


function Profile(user) {
    return null;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Card/>);
