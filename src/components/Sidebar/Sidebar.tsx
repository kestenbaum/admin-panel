import {FC, useState} from "react";

import styles from "./Sidebar.module.css"
import Form from "../Form/Form.tsx";
const Sidebar:FC = () => {
    const [isActive, setIsActive] = useState<boolean>(false)
    const toggleClick = () => setIsActive(!isActive)

    return (
        <div className={isActive ? styles.wrapper : styles.wrapper__active}>
            <div
                onClick={toggleClick}
                className={styles.arrow}
            ></div>
            <Form/>
        </div>
    );
};

export default Sidebar;