import {FC} from "react";
import ListItem from "../ListItem/ListItem.tsx";
import {useQuery} from "react-query";
import {worksServices} from "../../services/items.services.ts";

import styles from "./List.module.css";

const List: FC = () => {
    const {data, isLoading} = useQuery({
        queryKey: ["items"],
        queryFn: () => worksServices.getWorks()
    })

    return (
        <div className={styles.wrapper}>
            {!isLoading
                ? data
                    ?.map(item =>  <ListItem
                        key={item._id}
                        _id={item._id}
                        title={item.title}
                        img={item.img}
                    />)
                :
                <>loader</>}
        </div>
    );
};

export default List;