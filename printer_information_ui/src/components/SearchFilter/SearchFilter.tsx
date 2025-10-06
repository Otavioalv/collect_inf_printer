import { FaMagnifyingGlass } from "react-icons/fa6";
import { FiFilter } from "react-icons/fi";
import { FilterOptions } from "../FilterOptions/FilterOptions";
import { FiX } from "react-icons/fi";

import { useEffect, useState, type ChangeEvent, type Dispatch, type SetStateAction } from "react";
import type { printerData } from "@/types/printerTypes";

export type searchFilterProps = {
    listToFilter: printerData[]
    setListToFilter: Dispatch<SetStateAction<printerData[]>>
}

// Realizar filtro da lista
export const SearchFilter = ({listToFilter, setListToFilter}: searchFilterProps) => {
    
    const [fullList, ] = useState<printerData[]>(listToFilter);

    const [statusFilter, setStatusFilter] = useState<string>("Todos");
    const [colorFilter, setColorFilter] = useState<string>("Todos");
    const [textFilter, setTextFilter] = useState<string>("");

    const handleSetTextFilter = (e:ChangeEvent<HTMLInputElement>) => {
        setTextFilter(e.target.value)
    } 

    const handleResetFilter = () => {
        setStatusFilter("Todos");
        setColorFilter("Todos");
        setTextFilter("");

        setListToFilter(fullList)
    }

    useEffect(() => {
        console.log(statusFilter, colorFilter, textFilter);
    }, [statusFilter, colorFilter, textFilter]);

    return (
        <section 
            className="
                flex w-full bg-white p-4
                rounded-lg
                md:flex-row
                flex-col
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
                    onChange={handleSetTextFilter}
                    value={textFilter}
                />
            </div>

            {/* Opções de filtro */}
            <div className="flex gap-2 items-center">
                <FiFilter
                    className="text-zinc-500"
                />

                {/* Status */}
                <FilterOptions 
                    listOptions={["sucess", "error"]} 
                    defaultValue="Todos"
                    optionSelected={statusFilter}
                    setOptionSelected={setStatusFilter}
                />
                {/* Color */}
                <FilterOptions 
                    listOptions={["color", "P&B"]} 
                    defaultValue="Todos"
                    optionSelected={colorFilter}
                    setOptionSelected={setColorFilter}
                />



                {/* Botão para resetar filtro */}
                <button 
                    onClick={handleResetFilter}
                    className="
                        border border-zinc-200
                        p-2
                        rounded-sm
                        hover:bg-green-200
                        cursor-pointer
                    "
                >
                    <FiX/>
                </button>
            </div>
        </section>
    )
}