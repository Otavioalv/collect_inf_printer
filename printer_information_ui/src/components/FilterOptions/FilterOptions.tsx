import { useState } from "react"


export type filterOptionsProps = {
    listOptions: string[]
}

export const FilterOptions = ({listOptions}: filterOptionsProps) => {
    const [optionSelected, setOptionSelected] = useState<string>("Todos");

    return (
        <div className="
            sm:w-36 bg-red-300 
            transition-all
            p-1
            overflow-hidden
            relative
            "
        >
            <span>
                {optionSelected}
            </span>
            <ul className="
                absolute
                "
            >
                {listOptions.map((opt, i) => (
                    <li key={i}>
                        {opt}
                    </li>
                ))}
            </ul>
        </div>
    )
}