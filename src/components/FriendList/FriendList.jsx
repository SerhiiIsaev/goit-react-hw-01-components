import styles from "./friendList.module.css"
import PropTypes from "prop-types";
import { FriendsListItem } from "./FriendListItem/FriendListItem";


const FriendsList = ({ friends }) => {
    return (
        <ul className={styles.friendList}>
            {friends.map(item => (
                <FriendsListItem  key={item.id} avatar = {item.avatar} name = {item.name} isOnline = {item.isOnline}  />
            ))}
        </ul>)
}   


export { FriendsList }

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    })),
}