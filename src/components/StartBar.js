import React from "react";
import "./StartBarClock"
import styles from "../StartMenu.module.css"
import StartBarClock from "./StartBarClock";
import StartButton from "./StartButton";

class StartBar extends React.Component {
    render() {
        return (
            <div id={styles.startBar}>
                <StartButton/>
                <StartBarClock/>
            </div>
        );
    }
}

export default StartBar;