import {ChangeEvent, FC, useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {useMutation} from "react-query";
import {queryClient} from "../../Provider.tsx";

import Button from "../UI/Button/Button.tsx";

import {IForm, FormProps} from "../../interface";

import {worksServices} from "../../services/items.services.ts";
import styles from "./Form.module.css";

const Form:FC<FormProps> = ({setShowModal, showModal}) => {
    const [imageBase64, setImageBase34] = useState<string | null | ArrayBuffer>("")
    const {register, handleSubmit} = useForm<IForm>()
    const onSubmit:SubmitHandler<IForm> = (data) => mutation.mutate({...data, img: imageBase64});

    const handlerFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.length ? event.target.files[0] : null;
        if (!file) return
        const reader = new FileReader();

        reader.onloadend = () => {
            setImageBase34(reader.result);
        };

        reader.readAsDataURL(file);
    }

    const mutation = useMutation((FormData:IForm) => worksServices.postWork(FormData), {
        onSuccess: () => {
            queryClient.invalidateQueries("items");
        }
    });

    return (
        <form
            className={styles.form}
            onSubmit={handleSubmit(onSubmit)}
        >
            <input
                placeholder={"Title"}
                type={"text"}
                {...register('title')}/>
            <input
                placeholder={"Link"}
                type={"text"}
                {...register("link")}
            />
            <input
                placeholder={"Category"}
                type={"text"}
                {...register("category")}
            />
            <input
                name={"file"}
                onChange={handlerFileChange}
                type={"file"}
            />
            <Button
                children={"Create"}
                type={"submit"}
                onClick={() =>  showModal && setShowModal(false)}
            />
        </form>
    );
};

export default Form;