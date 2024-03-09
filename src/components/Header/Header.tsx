import {FC} from "react";
import Logo from "../Logo/Logo.tsx";

import style from "./Header.module.css"
const Header:FC = () => {
    return (
        <div className={style.header}>
            <div className="container">
                <div className={style.wrapper}>
                    <Logo children="Admin Panel" />
                </div>
            </div>
        </div>
    );
};

export default Header;