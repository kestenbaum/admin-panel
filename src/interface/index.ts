import React, {InputHTMLAttributes} from "react";
export interface ILogo {
    children: string
}

export interface IButton extends
    React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, React.AriaAttributes
{
    children: string
    color?: "red" | "green"
}

export interface IInput  extends InputHTMLAttributes<HTMLInputElement>{}

export interface Icons {
    _id?: string,
    title: string,
    img: string,
    category?: string
    link?: string
}

export interface IGetData {
    status: number
    data: Icons[]
}

export interface IPopup {
    children: React.ReactNode,
    showModal: boolean,
    setShowModal: any
}

export interface IFormInput {
    title: string
    link: string,
    img: string | null | ArrayBuffer,
    category: string
}

