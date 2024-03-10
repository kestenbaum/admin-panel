import {FC} from 'react';
import Input from "../UI/Input/Input.tsx";
import Button from "../UI/Button/Button.tsx";
import InputFunc from "../UI/InputFunc/InputFunc.tsx";
import {Icons} from "../../interface";

import styles from './Card.module.css';

export const Card:FC<Icons> = ({img, title, link}) => {
    return (
        <form className={styles.card}>
            <InputFunc
                type={"text"}
                placeholder={title}
            />
            <InputFunc
                type={"text"}
                placeholder={link}
            />
            <img src={img} className={styles.img} alt={'image'}/>
            <Input type={"file"}/>
            <Button>Save</Button>
        </form>
    );
};