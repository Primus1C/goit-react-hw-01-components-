import PropTypes from "prop-types";
import styles from "./FriendListItem.css";

const FriendListItem = ({ avatar, name, isOnline = false }) => {
    return (
        <li className="item">
            <span className={isOnline ? 'statusOn' : 'statusOff'}>{isOnline}</span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </li>
    );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool,
};

export default FriendListItem;
