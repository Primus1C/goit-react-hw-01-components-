import PropTypes from "prop-types";
import FriendListItem from "../FriendListItem/FriendListItem";

const FriendList = ({ friends }) => {
    return (
        <ul class="friend-list">
            {friends.map((element) => FriendListItem(element))}
        </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape),
};

export default FriendList;
