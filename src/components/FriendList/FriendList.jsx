import styles from "./friendList.module.css"
import PropTypes from "prop-types";

const FriendsList = ({ friends }) => {
    return (
        <ul className={styles.friendList}>
            {friends.map(item => (
                <li className={styles.item} key={item.id}>
                    {item.isOnline? <span className={styles.isOnline}></span>:<span className={styles.isOfline}></span>}
                    <img className={styles.avatar} src={item.avatar} alt="User avatar" width="48" />
                    <p className={styles.name}>{item.name}</p>
                </li>)
            )}
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