import {FC} from "react";
import {IInput} from "../../../interface";

import styles from "./InputFunc.module.css";
const InputFunc:FC<IInput> = ({...rest}) => {
    return (
        <input className={styles.input} {...rest}/>
    );
};

export default InputFunc;