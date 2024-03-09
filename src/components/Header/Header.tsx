import {FC} from "react";

import style from "./Header.module.css"
const Header:FC = () => {
    return (
        <div className={style.header}>
            <div className="container">
                <div className={style.wrapper}>
                        Admin Panel
                </div>
            </div>
        </div>
    );
};

export default Header;