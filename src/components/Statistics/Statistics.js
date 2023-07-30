function Statistics(props) {
    return (
        <section class="statistics">
            <h2 class="title">Upload stats</h2>

            <ul class="stat-list">
                {props.stats.map((element) => (
                    <li class="item" id={element.id}>
                        <span class="label">{element.label}</span>
                        <span class="percentage">{element.percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Statistics;
