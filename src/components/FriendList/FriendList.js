import PropTypes from "prop-types";
import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.css"

const FriendList = ({ friends }) => {
    return (
        <ul className="friend-list">
            {friends.map((element) => FriendListItem(element))}
        </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape),
};

export default FriendList;
