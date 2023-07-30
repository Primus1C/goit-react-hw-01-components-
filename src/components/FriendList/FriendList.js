import FriendListItem from "../FriendListItem/FriendListItem";

const FriendList = ({ friends }) => {
    return (
        <ul class="friend-list">
            {friends.map((element) => FriendListItem(element))}
        </ul>
    );
};

export default FriendList;
