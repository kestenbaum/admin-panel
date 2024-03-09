import React from "react";

export interface ILogo {
    children: string
}

export interface IButton extends
    React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, React.AriaAttributes
{
    children: string
}
