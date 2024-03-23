import {FC} from 'react';
import {ButtonProps} from "../../../interface";

import style from "./Button.module.css";

const Button:FC<ButtonProps> = ({children, ...rest}) => {
    return (
        <button className={style.btn} {...rest}>
            {children}
        </button>
    );
};

export default Button;