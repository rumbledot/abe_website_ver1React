import React from "react";
import styles from "../StartMenu.module.css"

class StartBarClock extends React.Component {
    constructor(props) {
        super(props);
        let current_date = new Date();
        let current_time = `${current_date.toLocaleDateString("en-US", { weekday: 'short' })} ${current_date.getHours()}:${current_date.getMinutes()}`;
        this.state = { time: current_time };
    }

    componentDidMount() {
        this.interval = setInterval(() => this.UpdateClock(), 60000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    UpdateClock() {
        let current_date = new Date();
        let current_time = `${current_date.toLocaleDateString("en-US", { weekday: 'short' })} ${current_date.getHours()}:${current_date.getMinutes()}`;
        console.log(current_time);
        this.setState({ time: current_time });
    }

    render() {
        return (
            <div id={styles.startBarClock}>{this.state.time}</div>
        );
    }
}

export default StartBarClock;