import type { ButtonHTMLAttributes } from "react"
import React from 'react';


export const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({children, ...rest}) => {
    return (
        <button className="bg-green-500 text-white p-2 font-bold rounded-lg text-sm transition-all hover:bg-green-400 cursor-pointer" {...rest}>
            {rest.name}
            {children}
        </button>
    )
}