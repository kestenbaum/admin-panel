import {FC} from "react";

import styles from "./List.module.css";
import ListItem from "../ListItem/ListItem.tsx";
const List:FC = () => {

    const data:any[] = [
            {
                "id": 1,
                "title": "Airbag Layout",
                "img": "/assets/airbag.png",
                "link": "https://kestenbaum.github.io/Airbag-Layout/"
            },
            {
                "id": 2,
                "title": "IT Services",
                "img": "/assets/it.png",
                "link": "https://kestenbaum.github.io/IT-Blog/"
            },
            {
                "id": 3,
                "title": "Work on yourself",
                "img": "/assets/work.png",
                "link": "https://kestenbaum.github.io/IT-Work/"
            },
            {
                "id": 4,
                "title": "Technology",
                "img": "/assets/technology.png",
                "link": "https://kestenbaum.github.io/Technology/"
            },
            {
                "id": 5,
                "title": "Aosta",
                "img": "/assets/aosta.png",
                "link": "https://kestenbaum.github.io/Aosta/"
            }
        ]

    return (
        <div className={styles.wrapper}>
            {data.map(element => {
                return <ListItem
                    key={element.id}
                    id={element.id}
                    link={element.link}
                    title={element.title}
                    img={element.img}
                />
            })}
        </div>
    );
};

export default List;