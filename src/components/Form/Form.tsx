import {FC} from "react";
import Input from "../UI/Input/Input.tsx";
import Button from "../UI/Button/Button.tsx";

import styles from "./Form.module.css";
const Form:FC = () => {
    return (
        <form className={styles.form}>
            <Input placeholder={"Title"} type={"text"}/>
            <Input placeholder={"Link"} type={"text"}/>
            <Input type={"file"}/>
            <Button children={"Create"}/>
        </form>
    );
};

export default Form;