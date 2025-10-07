// http://10.8.1.36:5000/printer/get_printer_info

// Remover coment para api
// import type { responseAxiosInterface } from "@/types/apiTypes";
// import printerApi from "./printerApi";
// -------------------------

import type { printerData } from "@/types/printerTypes";

export type printerInfoType = {
    cvs_format: string;
    printer_list: printerData[]
}

export const printerInfo = async (): Promise<printerInfoType> => {
    try {
        // remover coment api -------------------
        // const res = await printerApi.get("/printer/get_printer_info") as responseAxiosInterface<printerInfoType>

        // console.log(res.data.results);

        // return res.data.results
        // -------------------------------


        return {cvs_format: "", printer_list: [{'at_date': '07/10/2025 10:20:21',
 'average_printer': 0,
 'count_to_print': 240,
 'current_toner_level': 3,
 'ip': '172.36.15.2',
 'max_paper_capacity': 8000,
 'model': 'HP LaserJet Pro MFP M428fdw',
 'sector': 'COATL',
 'sn': 'BRDSND865G',
 'status': 'sucess',
 'toner_name': 'Black Cartridge HP CF258XC',
 'total_page_counter': 74159},
{'at_date': '07/10/2025 10:20:22',
 'average_printer': 1,
 'count_to_print': 5600,
 'current_toner_level': 70,
 'ip': '10.12.5.5',
 'max_paper_capacity': 8000,
 'model': 'HP LaserJet Pro MFP M428fdw',
 'sector': 'SEOFI',
 'sn': 'BRDSO130JG',
 'status': 'sucess',
 'toner_name': 'Black Cartridge HP CF258XC',
 'total_page_counter': 60052},
{'at_date': '07/10/2025 10:20:22',
 'average_printer': 1,
 'count_to_print': 6560,
 'current_toner_level': 82,
 'ip': '10.12.5.4',
 'max_paper_capacity': 8000,
 'model': 'HP LaserJet Pro MFP M428fdw',
 'sector': 'COGPE',
 'sn': 'BRDSND85PX',
 'status': 'sucess',
 'toner_name': 'Black Cartridge HP CF258XC',
 'total_page_counter': 55771},
{'at_date': '07/10/2025 10:20:23',
 'average_printer': 1,
 'count_to_print': 6960,
 'current_toner_level': 87,
 'ip': '172.24.15.3',
 'max_paper_capacity': 8000,
 'model': 'HP LaserJet Pro MFP M428fdw',
 'sector': 'COCAP',
 'sn': 'BRDSND85P8',
 'status': 'sucess',
 'toner_name': 'Black Cartridge HP CF258XC',
 'total_page_counter': 12817},
{'at_date': '07/10/2025 10:20:24',
 'average_printer': 0,
 'count_to_print': 1360,
 'current_toner_level': 17,
 'ip': '10.8.5.2',
 'max_paper_capacity': 8000,
 'model': 'HP LaserJet Pro MFP M428fdw',
 'sector': 'COAES',
 'sn': 'BRDSND969J',
 'status': 'sucess',
 'toner_name': 'Black Cartridge HP CF258XC',
 'total_page_counter': 26897},
{'at_date': '07/10/2025 10:20:24',
 'average_printer': 1,
 'count_to_print': 4000,
 'current_toner_level': 50,
 'ip': '10.8.5.3',
 'max_paper_capacity': 8000,
 'model': 'HP LaserJet Pro MFP M428fdw',
 'sector': 'COTIN-TESTE (impressora do CPBA)',
 'sn': 'BRDSND85P6',
 'status': 'sucess',
 'toner_name': 'Black Cartridge HP CF258XC',
 'total_page_counter': 14548},
{'at_date': '07/10/2025 10:20:25',
 'average_printer': 1,
 'count_to_print': 5680,
 'current_toner_level': 71,
 'ip': '172.30.15.3',
 'max_paper_capacity': 8000,
 'model': 'HP LaserJet Pro MFP M428fdw',
 'sector': 'DIR-02',
 'sn': 'BRDSND85PS',
 'status': 'sucess',
 'toner_name': 'Black Cartridge HP CF258XC',
 'total_page_counter': 32366},
{'at_date': '07/10/2025 10:20:26',
 'average_printer': 1,
 'count_to_print': 3840,
 'current_toner_level': 48,
 'ip': '172.30.15.1',
 'max_paper_capacity': 8000,
 'model': 'HP LaserJet Pro MFP M428fdw',
 'sector': 'DIR-01 TERREO',
 'sn': 'BRDSND865T',
 'status': 'sucess',
 'toner_name': 'Black Cartridge HP CF258XC',
 'total_page_counter': 29837},
{'at_date': '07/10/2025 10:20:33',
 'average_printer': 0,
 'count_to_print': 0,
 'current_toner_level': 0,
 'ip': '172.27.15.2',
 'max_paper_capacity': 8000,
 'model': "",
 'sector': 'COETI (PRÉDIO INCUBADORA)',
 'sn': "",
 'status': 'error',
 'toner_name': 'Black Cartridge HP CF258XC',
 'total_page_counter': 0}]}
    }catch(error) {
        console.error("printerInfo ERROR >>> ", error);

        return {cvs_format: "", printer_list: []}
    }
}