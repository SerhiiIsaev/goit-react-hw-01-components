import PropTypes from "prop-types";
import styles from "./statistics.module.css"

const Statistics = ({ stats, title }) => {
    return (
        <section className={styles.statistics}>
        {title ? <h2 className={styles.title}>{title}</h2> : ""}
        <ul className={styles.statList}>
            {stats.map(item => (
                <li className={styles.item} key={item.id} style={{ backgroundColor: getRandomHexColor() }}>
                    <span className={styles.label}>{item.label}</span>
                    <span className={styles.percentage}>{item.percentage}%</span>
                </li>
            ))}
        </ul>
    </section>)
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};



Statistics.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })),
    title: PropTypes.string,
}


export { Statistics }
