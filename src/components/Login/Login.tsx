import {FC} from "react";
import Input from "../UI/Input/Input.tsx";
import Button from "../UI/Button/Button.tsx";

import styles from "./Login.module.css"
const Login:FC = () => {
    return (
        <form className={styles.form}>
            <label className={styles.label} htmlFor="name">Username:</label>
            <Input type={"text"} id={"name"} name={"name"}/>
            <label className={styles.label} htmlFor="pass">Password:</label>
            <Input type={"password"} id={"pass"} name={"pass"}/>
            <Button children={"Login"}/>
        </form>
    );
};

export default Login;