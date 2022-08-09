import React from "react";
import styles from "../StartMenu.module.css";
import logo from "../resources/images/MakjOS.png"
import StartBar from "../components/StartBar";

class MainScreen extends React.Component {
    render() {
        return (
            <div id={styles.canvasBackground}>
                <img id={styles.canvasLogo} src={logo} alt="makjOS"/>
                <StartBar />
            </div>
        );
    }
}

export default MainScreen;