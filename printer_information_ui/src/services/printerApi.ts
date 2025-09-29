import axios from 'axios';

// http://10.8.1.36:5000/printer/get_printer_info
const URL:string = "http://10.8.1.36";
const PORT:string = "5000";

// const baseUrl:string = `http://10.8.1.36:5000`;
const baseUrl:string = `${URL}:${PORT}`;

const printerApi = axios.create({
    baseURL: baseUrl
});

export default printerApi;
