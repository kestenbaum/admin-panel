import {FC} from "react";
import ButtonFunc from "../UI/ButtonFunc/ButtonFunc.tsx";
import {Icons} from "../../interface";

import styles from "./ListItem.module.css";

const ListItem:FC<Icons> = (props) => {
    const {img, category, title, _id} = props
    return (
        <div className={styles.wrapper}>
            <div className={styles.block}>
                <span className={styles.title}>
                    Id:
                    <span className={styles.text}>{_id}</span>
                </span>
                <span className={styles.title}>
                    Title:
                    <span className={styles.text}>{title}</span>
                </span>
                <span className={styles.title}>
                    Link:
                    <span className={styles.text}>{category}</span>
                </span>
                <img src={img} width={25} height={25} alt="image item"/>
            </div>
            <div className={styles.btns}>
                <ButtonFunc children={"Delete"} color={"red"}/>
                <ButtonFunc children={"Update"} color={"green"}/>
            </div>
        </div>
    );
};

export default ListItem;