import {FC, useState} from "react";
import {useMutation} from "react-query";
import ButtonFunc from "../UI/ButtonFunc/ButtonFunc.tsx";
import Popup from "../UI/Popup/Popup.tsx";
import {Card} from "../Card/Card.tsx";
import {Icons} from "../../interface";
import {worksServices} from "../../services/items.services.ts";
import {queryClient} from "../../Provider.tsx";

import styles from "./ListItem.module.css";

const ListItem: FC<Icons> = (
    {title, _id, category, img, link}
) => {
    const [isShow, setIsShow] = useState<boolean>(false)
    const mutation = useMutation((_id: string) => worksServices.deleteWork(_id), {
        onSuccess: () => {
            queryClient.invalidateQueries("items")
        }
    })
    const deletePost = (_id: string) => mutation.mutate(_id)

    return (
        <div className={styles.wrapper}>
            <Popup
                showModal={isShow}
                setShowModal={setIsShow}
                children={<Card category={category} title={title} img={img} link={link}/>
                }/>
            <div className={styles.block}>
                <span className={styles.title}>
                    Id:
                    <span className={styles.text}>{_id}</span>
                </span>
                <span className={styles.title}>
                    Title:
                    <span className={styles.text}>{title}</span>
                </span>
            </div>
            <div className={styles.btns}>
                <ButtonFunc
                    children={"Delete"}
                    color={"red"}
                    onClick={() => deletePost(String(_id))}
                />
                <ButtonFunc
                    children={"Update"}
                    color={"green"}
                    onClick={() => setIsShow(!isShow)}
                />
            </div>
        </div>
    );
};

export default ListItem;