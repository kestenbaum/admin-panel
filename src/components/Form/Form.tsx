import {FC, useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {useMutation} from "react-query";

import {queryClient} from "../../Provider.tsx";
import {IFormInput} from "../../interface";
import {worksServices} from "../../services/items.services.ts";

import styles from "./Form.module.css";

const Form:FC = () => {
    const [imageBase64, setImageBase34] = useState<string>("")
    const {register, handleSubmit} = useForm<IFormInput>()
    const onSubmit:SubmitHandler<IFormInput> = (data) => {
        mutation.mutate({...data, img: imageBase64});
    };
    const handlerFileChange = (event:any) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImageBase34(reader.result);
        };

        reader.readAsDataURL(file);
    }

    const mutation = useMutation((formData) => worksServices.postWork(formData), {
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
                {...register('title')}
            />
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
                type={"file"}
                onChange={handlerFileChange}
            />
            <button
                children={"Create"}
                type={"submit"}
            />
        </form>
    );
};

export default Form;