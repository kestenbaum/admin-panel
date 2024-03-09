import React, {InputHTMLAttributes} from "react";

export interface ILogo {
    children: string
}

export interface IButton extends
    React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, React.AriaAttributes
{
    children: string
}

export interface IInput  extends InputHTMLAttributes<HTMLInputElement>{}