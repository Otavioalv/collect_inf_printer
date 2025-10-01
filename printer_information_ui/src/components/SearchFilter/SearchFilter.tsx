import { FaMagnifyingGlass } from "react-icons/fa6";
import { FiFilter } from "react-icons/fi";
import { FilterOptions } from "../FilterOptions/FilterOptions";
import { FiX } from "react-icons/fi";

export const SearchFilter = () => {
    return (
        <section 
            className="
                flex w-full bg-white p-4
                rounded-lg
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

                    "
                    type="text" 
                    name="" 
                    id="" 
                />
            </div>

            {/* Opções de filtro */}
            <div className="flex">
                <FiFilter/>

                <FilterOptions/>
                <FilterOptions/>

                <button>
                    <FiX/>
                </button>
            </div>
        </section>
    )
}