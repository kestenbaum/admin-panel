import {FC} from "react";
import Logo from "../Logo/Logo.tsx";
import Button from "../UI/Button/Button.tsx";

import style from "./Header.module.css"
const Header:FC = () => {
    return (
        <div className={style.header}>
            <div className="container">
                <div className={style.wrapper}>
                    <Logo />
                    <Button>LogOut</Button>
                </div>
            </div>
        </div>
    );
};

export default Header;