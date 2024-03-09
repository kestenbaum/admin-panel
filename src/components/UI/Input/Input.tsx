import {FC} from 'react';
import {IInput} from "../../../interface";

import styles from "./Input.module.css";
const Input:FC<IInput> = ({...rest}) => {
    return (
        <input className={styles.inp} type="text" {...rest}/>
    );
};

export default Input;