import type { printerData } from "@/types/printerTypes"


export const CardPrinter = ({printerInfo}: {printerInfo: printerData}) => {
    
    console.log("CARD PRINTER: ", printerInfo);
    
    return (
        <div className=" p-3 rounded-lg border border-blue-300">
            {/* MODELE & STATUS*/}
            <div>
                <div>
                    {/* icone */}
                    <p>{printerInfo.model}</p>
                </div>

                <div>
                    {/* icone */}
                    <span>
                        {printerInfo.status}
                    </span>
                </div>
            </div>

            {/* SETOR & IP */}
            <div>
                <div>
                    {/* icone */}
                    <p>Setor: </p>
                    <span>{printerInfo.sector}</span>
                </div>
                
                <div>
                    {/* icone */}
                    <p>IP: </p>
                    <span>{printerInfo.ip}</span>
                </div>
            </div>

            {/* Percentual do nivel do toner */}
            <div>
                <div>
                    <span>
                        Toner
                    </span>
                    <span>
                        #porcentagemCalculo#
                    </span>
                </div>

                {/* Fazer grafico */}
                <div>
                    #grafico#
                </div>
            </div>

            {/* Paginas totais */}
            <div>
                <div>
                    <p>Páginas totais:</p>
                    <span>
                        {printerInfo.total_page_counter}
                    </span>
                </div>

                <div>
                    <p>Para imprimir:</p>
                    <span>{printerInfo.count_to_print}</span>
                </div>
            </div>

            {/* Data de atualizaçãop */}
            <div>
                <p>
                    {/* icone */}
                    Atualizado: {printerInfo.at_date}
                </p>
            </div>
        </div>
    )
}