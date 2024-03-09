import  {FC} from 'react';
import logo from "../../assets/logo.png"
import {ILogo} from "../../interface";

import style from "./Logo.module.css"
const Logo:FC<ILogo> = ({children}) => {
    return (
        <div className={style.wrapper}>
            <img className={style.logo} src={logo} alt="logo panel"/>
            <span className={style.logo__text}>{children}</span>
        </div>
    );
};

export default Logo;