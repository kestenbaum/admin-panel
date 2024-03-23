import React, {AriaAttributes, ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from "react";

//Providers
export interface ProviderProps {
    children: React.ReactNode
}

//INTERFACE UI
export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, AriaAttributes {
    children: string
    onClick?: () => void
}

export interface PopupProps {
    children: ReactNode,
    showModal: boolean,
    setShowModal: any
}

//INTERFACE FORM
export interface IForm {
    _id?: string
    title: string
    link: string,
    img?: string | null | ArrayBuffer,
    category: string
}

export interface FormProps {
    showModal?: boolean,
    setShowModal: any
}

//Data
export interface GetDataProps {
    status: number
    data: IForm[]
}

