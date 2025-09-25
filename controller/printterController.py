from flask import jsonify
from model.printterModel import printterModel
from consts.PRINTER_IP_LIST import PRINTER_IP_LIST
from datetime import datetime
import pprint
import asyncio

class printterController():
    
    def __init__(self):
        self.printter_md = printterModel()
        
    async def total_page_counter_list(self):
        try:
            prttr_total_page_list = []
            
            for sector, ip in PRINTER_IP_LIST.items():
                
                total_page_counter = await self.printter_md.printter_snmp_connect(ip, "1.3.6.1.2.1.43.10.2.1.4.1.1")
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
            
    async def printter_info(self):
        try:
            
            prttr_total_page_list = []
            
            for sector, ip in PRINTER_IP_LIST.items():
                
                max_paper_capacity = 8000
                total_page_counter = await self.printter_md.printter_snmp_connect(ip, "1.3.6.1.2.1.43.10.2.1.4.1.1")
                current_toner_level = await self.printter_md.printter_snmp_connect(ip, "1.3.6.1.2.1.43.11.1.1.9.1.1")
                
                average_printer = int(current_toner_level / 48)
                format_datetime = "%d/%m/%Y %H:%M:%S"
                datetime_now = datetime.now().strftime(format_datetime)
                
                count_to_print = int((current_toner_level / 100) * max_paper_capacity)
                
                prttr_total_page = {
                    "ip": ip,
                    "sector": sector,
                    "total_page_counter": total_page_counter,
                    "at_date": datetime_now,
                    "current_toner_level": current_toner_level,
                    "average_printer": average_printer,
                    "count_to_print": count_to_print
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