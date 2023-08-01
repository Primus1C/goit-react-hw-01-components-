import PropTypes from "prop-types";
import styles from "./Profile.css";

function Profile(props) {
    return (
        <div className="profile">
            <div className="description">
                <img src={props.avatar} alt="User avatar" className="avatar" />
                <p className="name">{props.username}</p>
                <p className="tag">{props.tag}</p>
                <p className="location">{props.location}</p>
            </div>

            <ul className="stats">
                <li className="statItem">
                    <span className="label">Followers</span>
                    <span className="quantity">{props.stats.followers}</span>
                </li>
                <li className="statItem">
                    <span className="label">Views</span>
                    <span className="quantity">{props.stats.views}</span>
                </li>
                <li className="statItem">
                    <span className="label">Likes</span>
                    <span className="quantity">{props.stats.likes}</span>
                </li>
            </ul>
        </div>
    );
}

Profile.propTypes = {
    props: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        tag: PropTypes.string,
        location: PropTypes.string,
        stats: PropTypes.shape({
            label: PropTypes.string.isRequired,
            quantity: PropTypes.string.isRequired,
        }),
    }),
};

export default Profile;
