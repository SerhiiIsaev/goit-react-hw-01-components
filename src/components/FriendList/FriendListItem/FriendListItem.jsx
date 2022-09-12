import styles from "./friendListItem.module.css"
import PropTypes from "prop-types";

const FriendsListItem = ({avatar, name, isOnline }) => {
    return (
        <li className={styles.item} >
            {isOnline? <span className={styles.isOnline}></span>:<span className={styles.isOfline}></span>}
            <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={styles.name}>{name}</p>
        </li>)
} 

export {FriendsListItem}

FriendsListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}