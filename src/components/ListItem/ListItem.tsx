import {FC} from "react";

import styles from "./ListItem.module.css";
import ButtonFunc from "../UI/ButtonFunc/ButtonFunc.tsx";
interface IListItem {
    "id"?: 5,
    "title": number,
    "img": string,
    "link": string
}

const ListItem:FC<IListItem> = ({img, link, title, id}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.block}>
                <span className={styles.title}>
                    Id:
                    <span className={styles.text}>{id}</span>
                </span>
                <span className={styles.title}>
                    Title:
                    <span className={styles.text}>{title}</span>
                </span>
                <span className={styles.title}>
                    Link:
                    <span className={styles.text}>{link}</span>
                </span>
                <img src={img} alt="image item"/>
            </div>
            <div className={styles.btns}>
                <ButtonFunc children={"Delete"} color={"red"}/>
                <ButtonFunc children={"Update"} color={"green"}/>
            </div>
        </div>
    );
};

export default ListItem;