import PropTypes from "prop-types";

const Statistics = ({ stats, title = "Upload stats" }) => {
    return (
        <section class="statistics">
            <h2 class="title">{title}</h2>

            <ul class="stat-list">
                {stats.map((element) => (
                    <li class="item" id={element.id}>
                        <span class="label">{element.label}</span>
                        <span class="percentage">{element.percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

Statistics.propTypes = {
    stats: PropTypes.array,
    title: PropTypes.string,
};

export default Statistics;
