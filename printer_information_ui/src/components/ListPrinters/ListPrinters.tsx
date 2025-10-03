import { printerInfo} from "@/services/printerService"
import { useEffect, useMemo, useState } from "react";
import { CardPrinter } from "../CardPrinter/CardPrinter";
import { SearchFilter } from "../SearchFilter/SearchFilter";


import type { printerInfoType } from "@/services/printerService";
import type { printerData } from "@/types/printerTypes";


export const ListPrinters = () => {
    const [printers, setPrinters] = useState<printerInfoType>({cvs_format: "", printer_list: []});
    const [printerList, setPrinterList] = useState<printerData[]>([]);

    const fetchPrinterInfo = async() => {
        setPrinters(await printerInfo());
    }

    useEffect(() => {
        fetchPrinterInfo()
    }, []);

    useMemo(() => {
        setPrinterList(printers.printer_list);
    }, [printers.printer_list]);

    return (
        <section className="
            flex flex-col justify-center items-center 
            gap-5
            md:w-4/5
            2xl:w-[100em]
        ">
            <SearchFilter printerList={printerList} setPrintesList={setPrinterList}/>
            
            <p className="w-full text-zinc-500 font-semibold ">
                Mostrando {printerList.length} de {printerList.length} impressoras
            </p>

            {/* Lista de impresoras */}
            {/* <div className="flex flex-wrap box-border w-full bg-red-400"> */}
            <div className="
                grid w-full grid-cols-1
                lg:grid-cols-2
                2xl:grid-cols-3
                gap-4 box-border
            ">
                {printerList.map((data:printerData, i) => (
                    // Card
                    <CardPrinter printerInfo={data} key={i}/>
                ))}
            </div>
        </section>
    )
}