import { FaMagnifyingGlass } from "react-icons/fa6";
import { FiFilter } from "react-icons/fi";
import { FilterOptions } from "../FilterOptions/FilterOptions";
import { FiX } from "react-icons/fi";

import type { Dispatch, SetStateAction } from "react";
import type { printerData } from "@/types/printerTypes";

export type searchFilterProps = {
    printerList: printerData[]
    setPrintesList: Dispatch<SetStateAction<printerData[]>>
}

export const SearchFilter = ({printerList, setPrintesList}: searchFilterProps) => {
    // console.log(printerList)
    // setPrintesList([])
    
    return (
        <section 
            className="
                flex w-full bg-white p-4
                rounded-lg
                gap-3
            "
        >
            {/*Campo de texto de pesquisa */}
            <div
                className="
                    flex items-center
                    gap-2 w-full
                "
            >
                <FaMagnifyingGlass 
                    className="
                        text-zinc-500
                        text-md
                    "
                />
                <input 
                    className="
                        bg-zinc-100
                        border border-zinc-200
                        rounded-md
                        outline-none
                        py-1 px-4
                        text-md
                        w-full
                    "
                    placeholder="Buscar por modelo, IP ou setor..."
                    type="text" 
                    name="" 
                    id="" 
                />
            </div>

            {/* Opções de filtro */}
            <div className="flex gap-2 items-center">
                <FiFilter
                    className="text-zinc-500"
                />

                {/* Status */}
                <FilterOptions listOptions={["sucess", "error"]}/>
                {/* Color */}
                <FilterOptions listOptions={["color", "P&B"]}/>

                <button className="
                    border border-zinc-200
                    p-2
                    rounded-sm
                    "
                >
                    <FiX/>
                </button>
            </div>
        </section>
    )
}