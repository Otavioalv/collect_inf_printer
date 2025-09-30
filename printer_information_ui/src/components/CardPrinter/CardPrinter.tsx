import { LuPrinter, LuMapPin } from "react-icons/lu";
import { FiCheckCircle } from "react-icons/fi";
import { TiDeleteOutline } from "react-icons/ti";
import { FaHashtag } from "react-icons/fa";
import { FaRegCalendar } from "react-icons/fa";

import type { printerData } from "@/types/printerTypes"
import  "./styles.css"

export const CardPrinter = ({printerInfo}: {printerInfo: printerData}) => {
    return (
        <div className="flex flex-col gap-3 p-4 rounded-lg border border-zinc-300 bg-white text-slate-900 w-[450px]">
            {/* MODELE & STATUS*/}
            <div className="flex justify-between gap-9">
                
                <div className="flex justify-center items-center gap-2">
                    <LuPrinter className="text-zinc-500"/>
                    <p className="font-medium">{printerInfo.model}</p>
                </div>

                <div 
                    className={`
                        flex justify-center items-center 
                        gap-2 rounded-lg
                        p-1 px-3
                        font-medium text-white 
                        ${printerInfo.status == "sucess" ? "bg-green-500" : "bg-red-500"} 
                    `}
                >
                    {printerInfo.status == "sucess" ? (
                        <FiCheckCircle/>
                    ) : (
                        <TiDeleteOutline/>
                    )}
                    
                    <span>
                        {printerInfo.status}
                    </span>
                </div>
            </div>

            {/* SETOR & IP */}
            <div className="flex justify-between gap-9">
                <div className="flex justify-center items-center gap-2">
                    <LuMapPin className="text-zinc-500"/>
                    <p className="text-zinc-500">Setor: </p>
                    <span className="font-medium">{printerInfo.sector}</span>
                </div>
                
                <div className="flex justify-center items-center gap-2">
                    <FaHashtag className="text-zinc-500"/>
                    <p className="text-zinc-500">IP: </p>
                    <span className="font-medium">{printerInfo.ip}</span>
                </div>
            </div>

            {/* Percentual do nivel do toner */}
            <div>
                <div className="flex justify-between">
                    <span className="text-zinc-500">
                        Toner
                    </span>
                    <span
                        className={`
                            font-medium
                            ${printerInfo.current_toner_level <= 3 
                                ? "text-red-500"
                                : printerInfo.current_toner_level >= 4 && printerInfo.current_toner_level <= 10 
                                    ? "text-yellow-300"
                                    : "text-green-500"
                        }`}
                    >
                        {printerInfo.current_toner_level}%
                    </span>
                </div>

                {/* Fazer grafico */}

                {/* 
                    // x <= 3 red
                    // x >= 4 && x <=10 yellow
                    // x > 10 green
                */}
                <div 
                    style={{ ['--toner-percent' as string]: `${printerInfo.current_toner_level}%` }}
                    className={`
                        toner-grafic bg-zinc-200 
                        relative overflow-hidden  
                        w-full rounded-full h-2 
                        transition-all 
                        after:content-[''] after:absolute 
                        after:h-full
                        ${printerInfo.current_toner_level <= 3 
                            ? "after:bg-red-500"
                            : printerInfo.current_toner_level >= 4 && printerInfo.current_toner_level <= 10 
                                ? "after:bg-yellow-300"
                                : "after:bg-green-500"
                        }
                    `}
                />
            </div>

            {/* Paginas totais */}
            <div className="flex justify-between">
                <div>
                    <p className="text-zinc-500">Páginas totais:</p>
                    <span className="font-medium">
                        {printerInfo.total_page_counter}
                    </span>
                </div>

                <div>
                    <p className="text-zinc-500">Para imprimir:</p>
                    <span className="font-medium">
                        {printerInfo.count_to_print}
                    </span>
                </div>
            </div>

            {/* Data de atualizaçãop */}
            <div className="flex items-center gap-2 text-zinc-500 text-sm">
                <FaRegCalendar/>
                <p >
                    Atualizado: {printerInfo.at_date}
                </p>
            </div>
        </div>
    )
}