import {FC, useState} from "react";
import {useMutation} from "react-query";
import {worksServices} from "../../services/items.services.ts";
import {queryClient} from "../../Provider.tsx";

import Popup from "../UI/Popup/Popup.tsx";
import Button from "../UI/Button/Button.tsx";
import {IForm} from "../../interface";

import {Card} from "../Card/Card.tsx";
import styles from "./ListItem.module.css";

const ListItem: FC<IForm> = (
    {title, _id,img,category,link}
) => {
    const [isShow, setIsShow] = useState<boolean>(false)
    const mutation = useMutation((_id: string) => worksServices.deleteWork(_id), {
        onSuccess: () => queryClient.invalidateQueries("items")
    })
    const deletePost = (_id: string) => mutation.mutate(_id)

    return (
        <div className={styles.wrapper}>
            <Popup
                showModal={isShow}
                setShowModal={setIsShow}
                children={<Card _id={_id} title={title} img={String(img)} link={link} category={category}/>}
            />
            <div className={styles.block}>
                <span className={styles.title}>
                    Title:
                    <span className={styles.text}>{title}</span>
                </span>
            </div>
            <div className={styles.btns}>
                <Button
                    children={"Delete"}
                    onClick={() => deletePost(String(_id))}
                />
                <Button
                    children={"Update"}
                    onClick={() => setIsShow(!isShow)}
                />
            </div>
        </div>
    );
};

export default ListItem;