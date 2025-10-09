import type { ButtonHTMLAttributes } from "react"

export const Button = ({...rest}: ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button className="bg-green-500 text-white p-2 font-bold rounded-lg text-sm transition-all hover:bg-green-400 cursor-pointer" {...rest}>
            {rest.name}
        </button>
    )
}