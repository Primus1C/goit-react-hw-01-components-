import PropTypes from "prop-types";
import css from "./Statistics.css";

const Statistics = ({ stats, title = "Upload stats" }) => {
    return (
        <section className="statistics">
            <h2 className="title">{title}</h2>

            <ul className="stat-list">
                {stats.map((element) => (
                    <li
                        className="item"
                        key={element.id}
                        id={element.id}
                        style={{ backgroundColor: generateColor() }}
                    >
                        <span className="label">{element.label}</span>
                        <span className="percentage">
                            {element.percentage}%
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

Statistics.propTypes = {
    stats: PropTypes.array,
    title: PropTypes.string.isRequired,
};

function generateColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

export default Statistics;
