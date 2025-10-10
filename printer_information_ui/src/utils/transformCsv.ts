

export const transformCsv = (text: string, header: string): Blob => {
    // console.log(text);
    // adicionar cabeçalho em array e converter string com join(",")
    
    const contentCSV: string = `${header}\n${text}`


    const blob = new Blob([contentCSV], { type: 'text/csv;charset=utf-8;' });


    /* 
    // É uma boa prática liberar o objeto URL após o download
    URL.revokeObjectURL(url);
    */
    return blob
}