from flask import jsonify
from model.printerModel import printerModel
from consts.PRINTER_IP_LIST import PRINTER_IP_LIST
from datetime import datetime
import pprint
import asyncio

class printerController():
    
    def __init__(self):
        self.printer_md = printerModel()
        
    async def total_page_counter_list(self):
        try:
            prttr_total_page_list = []
            
            for sector, ip in PRINTER_IP_LIST.items():
                
                total_page_counter = await self.printer_md.printer_snmp_connect(ip, "1.3.6.1.2.1.43.10.2.1.4.1.1")
                format_datetime = "%d/%m/%Y %H:%M:%S"
                datetime_now = datetime.now().strftime(format_datetime)
                
                prttr_total_page = {
                    "ip": ip,
                    "sector": sector,
                    "counter": total_page_counter,
                    "at_date": datetime_now
                }
                
                prttr_total_page_list.append(prttr_total_page)
                
                pprint.pprint(prttr_total_page_list)
            
            return jsonify({
                "message": "Dados das impressoras coletadas com sucesso",
                "results": prttr_total_page_list
            })
        except Exception as err: 
            print(err)
            return jsonify({
                "message": "Erro ao coletar dados das impressoras",
                "results": []
            })
            
    async def printer_info(self):
        try:
            
            prttr_total_page_list = []
            
            for sector, ip in PRINTER_IP_LIST.items():
                max_paper_capacity = 8000
                total_page_counter = await self.printer_md.printer_snmp_connect(ip, "1.3.6.1.2.1.43.10.2.1.4.1.1")
                
                current_toner_level = 0
                model = 0
                serial_number = 0
                average_printer = 0
                count_to_print = 0
                
                if(total_page_counter):
                    current_toner_level = await self.printer_md.printer_snmp_connect(ip, "1.3.6.1.2.1.43.11.1.1.9.1.1")
                    model = await self.printer_md.printer_snmp_connect(ip, "1.3.6.1.2.1.25.3.2.1.3.1")
                    serial_number = await self.printer_md.printer_snmp_connect(ip, "1.3.6.1.2.1.43.5.1.1.17.1")
                    
                    average_printer = int(current_toner_level / 48)
                    count_to_print = int((current_toner_level / 100) * max_paper_capacity)
                
                format_datetime = "%d/%m/%Y %H:%M:%S"
                datetime_now = datetime.now().strftime(format_datetime)
                
                
                # print("sucess" if total_page_counter else "error")
                
                prttr_total_page = {
                    "ip": ip,
                    "sector": sector,
                    "total_page_counter": total_page_counter,
                    "at_date": datetime_now,
                    "current_toner_level": current_toner_level,
                    "average_printer": average_printer,
                    "count_to_print": count_to_print,
                    "model": model,
                    "sn": serial_number,
                    "status": "sucess" if total_page_counter else "error"
                }
                
                prttr_total_page_list.append(prttr_total_page)
                
                pprint.pprint(prttr_total_page)
                
                
            cvs_format = ""
            for prttr_list in prttr_total_page_list:
                print(f"{prttr_list["ip"]},{prttr_list["sector"]},{prttr_list["total_page_counter"]},{prttr_list["at_date"]},{prttr_list["current_toner_level"]},{prttr_list["average_printer"]},{prttr_list["count_to_print"]},{prttr_list["model"]},{prttr_list["sn"]},{prttr_list["status"]}")
                cvs_format += f"""{prttr_list["ip"]},{prttr_list["sector"]},{prttr_list["total_page_counter"]},{prttr_list["at_date"]},{prttr_list["current_toner_level"]},{prttr_list["average_printer"]},{prttr_list["count_to_print"]},{prttr_list["model"]},{prttr_list["sn"]},{prttr_list["status"]}\n"""
                    
                                    
            
            return jsonify({
                "message": "Dados das impressoras coletadas com sucesso",
                "results": {
                    "printer_list": prttr_total_page_list,
                    "cvs_format": cvs_format
                }
            })
        except Exception as err: 
            print(err)
            return jsonify({
                "message": "Erro ao coletar dados das impressoras",
                "results": []
            })