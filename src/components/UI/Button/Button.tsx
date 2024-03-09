import {FC} from 'react';
import {IButton} from "../../../interface";

import style from "./Button.module.css";

const Button:FC<IButton> = ({children, ...rest}) => {
    return (
        <button className={style.btn} {...rest}>
            {children}
        </button>
    );
};

export default Button;