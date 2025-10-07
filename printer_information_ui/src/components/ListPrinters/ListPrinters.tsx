import { printerInfo } from "@/services/printerService";
import { useEffect, useState } from "react";
import { CardPrinter } from "../CardPrinter/CardPrinter";
import { SearchFilter } from "../SearchFilter/SearchFilter";

import type { printerData } from "@/types/printerTypes";

export const ListPrinters = () => {
    // Estado para guardar a lista original e imutável de impressoras
    const [allPrinters, setAllPrinters] = useState<printerData[]>([]);
    // Estado para a lista que será exibida (e modificada pelo filtro)
    const [displayedPrinters, setDisplayedPrinters] = useState<printerData[]>([]);

    useEffect(() => {
        const fetchPrinterInfo = async () => {
            const data = await printerInfo();
            // Define ambos os estados com os dados iniciais
            setAllPrinters(data.printer_list);
            setDisplayedPrinters(data.printer_list);
        }
        fetchPrinterInfo();
    }, []);

    return (
        <section className="
            flex flex-col justify-center items-center 
            gap-5
            md:w-4/5
            2xl:w-[100em]
        ">
            <SearchFilter 
                originalList={allPrinters} 
                onFilterChange={setDisplayedPrinters} // Passamos a função de setState da lista exibida
            />
            
            <p className="w-full text-zinc-500 font-semibold ">
                {/* Mostra a contagem da lista filtrada e da lista total */}
                Mostrando {displayedPrinters.length} de {allPrinters.length} impressoras
            </p>

            {/* Lista de impresoras */}
            <div className="
                grid w-full grid-cols-1
                lg:grid-cols-2
                2xl:grid-cols-3
                gap-4 box-border
            ">
                {/* Mapeia a lista filtrada 'displayedPrinters' */}
                {displayedPrinters.map((data: printerData, i) => (
                    // Card
                    <CardPrinter printerInfo={data} key={i} />
                ))}
            </div>
        </section>
    )
}