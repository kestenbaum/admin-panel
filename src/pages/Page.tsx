import {FC, useState} from 'react';

import List from "../components/List/List.tsx";
import Login from "../components/Login/Login.tsx";

import styles from "./Page.module.css"
const Page: FC = () => {
    const [iSLogin] = useState<boolean>(false)

    return (
        <section className={styles.page}>
            <div className="container">
                <div className={styles.wrapper}>
                    {iSLogin ?
                        <Login/>
                        :
                        <>
                            <List/>
                        </>
                    }
                </div>
            </div>
        </section>
    );
};

export default Page;