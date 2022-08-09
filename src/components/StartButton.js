import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import {
    changeMenuState,
    getMenuState
} from "../stores/slices/mainScreenSlice";
import styles from "../StartMenu.module.css"
import button_img from "../resources/images/Abe.png"

class StartButton extends React.Component {
    render() {
        const menuState = useSelector(getMenuState);
        const dispatch = useDispatch();

        return (
            <button id={styles.startButton} onClick={() => dispatch(changeMenuState())}>
                <img src={button_img} alt="ABE!" />
            </button >
        );
    }
}

export default StartButton;