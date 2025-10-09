import { printerInfo } from "@/services/printerService";
import { useEffect, useState } from "react";
import { CardPrinter } from "../CardPrinter/CardPrinter";
import { SearchFilter } from "../SearchFilter/SearchFilter";
import { CardInfoBox } from "../CardInfoBox/CardInfoBox";

import { LuPrinter, LuTriangleAlert } from "react-icons/lu";
import { FiCheckCircle } from "react-icons/fi";
import { RxLightningBolt } from "react-icons/rx";

import type { printerData } from "@/types/printerTypes";
import { LoadingList } from "../LoadingList/LoadingList";
import { Button } from "../Button/Button";


export const ListPrinters = () => {
    // Estado para guardar a lista original e imutável de impressoras
    const [allPrinters, setAllPrinters] = useState<printerData[]>([]);
    // Estado para a lista que será exibida (e modificada pelo filtro)
    const [displayedPrinters, setDisplayedPrinters] = useState<printerData[]>([]);

    // Total numerico de impressoras listadas
    const [totalPrinters, setTotalPrinters] = useState<number>(0);
    // quantidade e porcentagem de impressoras que não deram erro
    const [totalSuccess, setTotalSuccess] = useState<number>(0);
    const [totalSuccessPercent, setTotalSuccessPercent] = useState<number>(0);
    // quantidade e porcentagem de impressoras que deram erro
    const [totalError, setTotalError] = useState<number>(0);
    const [totalErrorPercent, setTotalErrorPercent] = useState<number>(0);
    // Nivel do toner
    const [tonerLevelM , setTonerLevelM] = useState<number>(0);

    const [textCsv, setTextCsv] = useState<string>("");

    const [loading, setLoading] = useState<boolean>(false);





    const setInfoPrinters = async (printers: printerData[]) => {
        const qtdPrinters = printers.length

        const totalS = printers.map(p => p).filter(p => p.status === "sucess").length
        const totalE = printers.map(p => p).filter(p => p.status === "error").length
        
        const totalSPercent = (totalS / qtdPrinters) * 100
        const totalEPercent = (totalE / qtdPrinters) * 100

        const calcM = printers.map(p => p.current_toner_level).reduce((a, v) => a+v);
        const calcTonerLevel = calcM / qtdPrinters

        // console.log(printers.map(p => p.current_toner_level));
        // console.log(printers.map(p => p.current_toner_level).reduce((a, v) => a+v));

        setTotalPrinters(qtdPrinters);
        setTotalSuccess(totalS);
        setTotalError(totalE);

        setTotalSuccessPercent(totalSPercent);
        setTotalErrorPercent(totalEPercent);

        setTonerLevelM(calcTonerLevel);
        
    }  
    

    const copyCsv = () => {
        navigator.clipboard.writeText(textCsv)
        .then(() => {
            console.log("Copiado");
        })
        .catch(err => {
            console.log(err);
        });
    }

    useEffect(() => {
        const fetchPrinterInfo = async () => {
            setLoading(true);
            
            const data = await printerInfo();
            // Define ambos os estados com os dados iniciais
            setTextCsv(data.cvs_format);
            setAllPrinters(data.printer_list);
            setDisplayedPrinters(data.printer_list);
            // setInfoPrinters(data.printer_list);

            setLoading(false);
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
            {/* <div className="flex gap-4 justify-between w-full"> */}
            {/* <div className="flex sm:flex-row flex-col gap-4 justify-between w-full">
                <CardInfoBox 
                    title="Total de impressoras" 
                    value={totalPrinters} 
                    percent={0}
                    description="impressoras monitoradas" 
                    colorful={false}
                    iconCard={LuPrinter}/>
                <CardInfoBox 
                    title="Online" 
                    value={totalSuccess} 
                    percent={totalSuccessPercent}
                    description={`${totalSuccessPercent.toFixed(1)}% operacional`}
                    iconCard={FiCheckCircle}/>
                <CardInfoBox 
                    title="Error" 
                    value={totalError} 
                    percent={totalErrorPercent}
                    description={`${totalErrorPercent.toFixed(1)}% com problemas`} 
                    iconCard={LuTriangleAlert}/>
                <CardInfoBox 
                    title="Toner Médio" 
                    value={`${tonerLevelM.toFixed(1)}%`}
                    percent={tonerLevelM}
                    description="nível médio do toner" 
                    iconCard={RxLightningBolt}/>
            </div> */}


            <SearchFilter 
                originalList={allPrinters} 
                onFilterChange={setDisplayedPrinters} // Passamos a função de setState da lista exibida
            />
            
            <div className="flex justify-between w-full">
                <p className="w-full text-zinc-500 font-semibold ">
                    {/* Mostra a contagem da lista filtrada e da lista total */}
                    Mostrando {displayedPrinters.length} de {allPrinters.length} impressoras
                </p>


                <div className="flex gap-2 w-full justify-end">
                    <Button name={"Copiar CSV"} onClick={copyCsv}/>
                    {/* <Button name={"Download CSV"}/> */}
                </div>
            </div>

            {/* Lista de impresoras */}
            <div className="
                grid w-full grid-cols-1
                lg:grid-cols-2
                2xl:grid-cols-3
                gap-4 box-border
            ">
                {loading && <LoadingList/>}

                {/* Mapeia a lista filtrada 'displayedPrinters' */}
                {displayedPrinters.map((data: printerData, i) => (
                    // Card
                    <CardPrinter printerInfo={data} key={i} />
                ))}
            </div>
        </section>
    )
}