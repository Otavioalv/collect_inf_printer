// http://10.8.1.36:5000/printer/get_printer_info

// Remover coment para api
import type { responseAxiosInterface } from "@/types/apiTypes";
import printerApi from "./printerApi";
// -------------------------

import type { printerData } from "@/types/printerTypes";

export type printerInfoType = {
    cvs_format: string;
    printer_list: printerData[]
}

export const printerInfo = async (): Promise<printerInfoType> => {
    try {
        // remover coment api -------------------
        const res = await printerApi.get("/printer/get_printer_info") as responseAxiosInterface<printerInfoType>

        console.log(res.data.results);

        return res.data.results
    }catch(error) {
        console.error("printerInfo ERROR >>> ", error);

        return {cvs_format: "", printer_list: []}
    }
}