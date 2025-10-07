export type printerData = {
    at_date: string;
    average_printer: number;
    count_to_print: number;
    current_toner_level: number;
    ip: string;
    model: string;
    sector: string;
    sn: string;
    status: "sucess" | "error";
    total_page_counter: number;
    toner_name: string;

    // temp
    max_paper_capacity: number
}
