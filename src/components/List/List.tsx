import {FC, useState} from "react";
import ListItem from "../ListItem/ListItem.tsx";
import {worksServices} from "../../services/items.services.ts";

import {useQuery} from "react-query";

import styles from "./List.module.css"
import Popup from "../UI/Popup/Popup.tsx";
import Form from "../Form/Form.tsx";

const List: FC = () => {
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)
    const {data, isLoading} = useQuery({
        queryKey: ["items"],
        queryFn: () => worksServices.getWorks()
    })

    return (
        <div className={styles.wrapper}>
            <Popup
                showModal={modal}
                setShowModal={toggle}
                children={<Form setShowModal={setModal} showModal={modal}/>}
            />
            <div
                className={styles.create__form}
                onClick={() => setModal(!modal)}
            >
                Create Element
            </div>
            {!isLoading
                ? data
                    ?.map(item =>  <ListItem
                        _id={item._id}
                        key={item._id}
                        title={item.title}
                        img={item.img}
                        link={item.link}
                        category={item.category}/>)
                :
                <>loader</>}
        </div>
    );
};

export default List;