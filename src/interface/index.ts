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
    _id: string,
    title: string,
    img: string,
    category?: string
}

export interface IGetData {
    status: number
    data: Icons[]
}