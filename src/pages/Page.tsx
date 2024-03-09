import {FC, useState} from 'react';

import style from "./Page.module.css"
import List from "../components/List/List.tsx";
import Sidebar from "../components/Sidebar/Sidebar.tsx";
import Login from "../components/Login/Login.tsx";

const Page: FC = () => {
    const [iSLogin, setIsLogin] = useState<boolean>(false)

    return (
        <section className={style.page}>
            <div className="container">
                <div className={style.wrapper}>
                    {iSLogin ?
                        <Login/>
                        :
                        <>
                            <Sidebar/>
                            <List/>
                        </>
                    }
                </div>
            </div>
        </section>
    );
};

export default Page;