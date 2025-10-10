import { FaMagnifyingGlass } from "react-icons/fa6";
import { FiFilter, FiX } from "react-icons/fi";
import { FilterOptions } from "../FilterOptions/FilterOptions";

import { useEffect, useState, useMemo } from "react";
import type { ChangeEvent, Dispatch, SetStateAction} from "react";
import type { printerData } from "@/types/printerTypes";

export type searchFilterProps = {
    originalList: printerData[]; 
    onFilterChange: Dispatch<SetStateAction<printerData[]>>; 
}

export const SearchFilter = ({ originalList, onFilterChange }: searchFilterProps) => {
    
    const [statusFilter, setStatusFilter] = useState<string>("Todos");
    const [colorFilter, setColorFilter] = useState<string>("Todos");
    const [textFilter, setTextFilter] = useState<string>("");

    const colorList = useMemo(() => {
        return [...new Set(originalList.map(item => item.toner_name))];
    }, [originalList]);

    const statusList: string[] = ["sucess", "error"];

    const handleSetTextFilter = (e: ChangeEvent<HTMLInputElement>) => {
        setTextFilter(e.target.value);
    } 

    const handleResetFilter = () => {
        setStatusFilter("Todos");
        setColorFilter("Todos");
        setTextFilter("");

        onFilterChange(originalList); 
    }

    // O useEffect agora é responsável apenas por aplicar os filtros e notificar o pai.
    useEffect(() => {
        const filteredList = originalList.filter((item) => {
            const statusMatch = statusFilter === "Todos" || item.status === statusFilter;
            const colorMatch = colorFilter === "Todos" || item.toner_name === colorFilter;
            
            const textMatch = !textFilter || (
                String(item.model || "")?.trim().toUpperCase().includes(textFilter.trim().toUpperCase()) ||
                String(item.ip || "")?.trim().includes(textFilter.trim().toUpperCase()) ||
                String(item.sector || "")?.trim().toUpperCase().includes(textFilter.trim().toUpperCase())
            );

            return statusMatch && colorMatch && textMatch;
        });

        // Chama a função do pai com a lista já filtrada
        onFilterChange(filteredList);
        
    }, [statusFilter, colorFilter, textFilter, originalList, onFilterChange]);

    return (
        <section 
            className="
                flex w-full bg-white p-4
                border border-zinc-300
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
                    listOptions={statusList} 
                    defaultValue="Todos"
                    optionSelected={statusFilter}
                    setOptionSelected={setStatusFilter}
                />
                {/* Color */}
                <FilterOptions 
                    listOptions={colorList} 
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