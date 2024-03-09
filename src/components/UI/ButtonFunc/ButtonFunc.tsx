import {FC} from "react";
import {IButton} from "../../../interface";

import styles from "./ButtonFunc.module.css";
const ButtonFunc:FC<IButton> = ({children, color,  ...rest}) => {
    return (
        <button className={styles.btn} {...rest} style={{backgroundColor: color}}>
            {children}
        </button>
    );
};

export default ButtonFunc;