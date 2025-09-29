import { printerInfo} from "@/services/printerService"
import { useEffect, useState } from "react";
import { CardPrinter } from "../CardPrinter/CardPrinter";

import type { printerInfoType } from "@/services/printerService";
import type { printerData } from "@/types/printerTypes";

export const ListPrinters = () => {
    const [printers, setPrinters] = useState<printerInfoType>({cvs_format: "", printer_list: []});


    const fetchPrinterInfo = async() => {
        setPrinters(await printerInfo());
    }

    useEffect(() => {
        fetchPrinterInfo()
    }, []);

    return (
        <section>
            <p>
                Mostrando ... de ... impressoras
            </p>

            {/* Lista de impresoras */}
            <div className="flex flex-wrap gap-2">
                {printers.printer_list.map((data:printerData, i) => (
                    <CardPrinter printerInfo={data} key={i}/>
                ))}
            </div>
        </section>
    )
}