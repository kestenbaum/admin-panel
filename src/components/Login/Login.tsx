import {FC} from "react";
import Button from "../UI/Button/Button.tsx";

import styles from "./Login.module.css"
const Login:FC = () => {
    return (
        <form className={styles.form}>
            <label className={styles.label} htmlFor="name">Username:</label>
            <input type={"text"} id={"name"} name={"name"}/>
            <label className={styles.label} htmlFor="pass">Password:</label>
            <input type={"password"} id={"pass"} name={"pass"}/>
            <Button children={"Login"}/>
        </form>
    );
};

export default Login;