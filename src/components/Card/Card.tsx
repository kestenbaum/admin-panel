import {FC} from 'react';
import img from "../../assets/logo.png"


import styles from './Card.module.css';
import Input from "../UI/Input/Input.tsx";
import Button from "../UI/Button/Button.tsx";
import InputFunc from "../UI/InputFunc/InputFunc.tsx";

export const Card:FC = () => {
    return (
        <div className={styles.card}>
            <InputFunc type={"text"} placeholder={"Aosta"}/>
            <InputFunc type={"text"} placeholder={"Link"}/>
            <img src={img} className={styles.img} alt={'image'}/>
            <Input type={"file"}/>
            <Button>Save</Button>
        </div>
    );
};