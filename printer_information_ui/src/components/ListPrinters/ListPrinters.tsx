import { printerInfo} from "@/services/printerService"
import { useEffect, useState } from "react";
import { CardPrinter } from "../CardPrinter/CardPrinter";

import type { printerInfoType } from "@/services/printerService";
import type { printerData } from "@/types/printerTypes";
import { SearchFilter } from "../SearchFilter/SearchFilter";

export const ListPrinters = () => {
    const [printers, setPrinters] = useState<printerInfoType>({cvs_format: "", printer_list: []});


    const fetchPrinterInfo = async() => {
        setPrinters(await printerInfo());
    }

    useEffect(() => {
        fetchPrinterInfo()
    }, []);

    return (
        <section className="flex flex-col items-center gap-5">
            <SearchFilter/>

            <p className="text-zinc-500 font-semibold ">
                Mostrando {printers.printer_list.length} de {printers.printer_list.length} impressoras
            </p>

            {/* Lista de impresoras */}
            <div className="flex flex-wrap gap-4 justify-center">
                {printers.printer_list.map((data:printerData, i) => (
                    <CardPrinter printerInfo={data} key={i}/>
                ))}
            </div>
        </section>
    )
}