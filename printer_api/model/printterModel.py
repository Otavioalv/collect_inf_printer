from utils.snmpCnn import snmp_get
from datetime import datetime
import pprint
import asyncio

class printterModel():
    
    # def __init__(self):
    #     print("Iniciado Model")
        
        
    async def get_total_page_counter(self, ip_printter):
        try:
            OID = "1.3.6.1.2.1.43.10.2.1.4.1.1"
            COMMUNITY_STRING = 'public'
            
            """ 
                ip, setor, contador
            """
            
            total_page_counter = await snmp_get(ip_printter, COMMUNITY_STRING, OID)
            
            return total_page_counter
        except Exception as err: 
            print("printtterModel.get_total_page_counter >>> ", err)
            return []
    
    async def printter_snmp_connect(self, ip_printter, oid):
        try:
            # OID = "1.3.6.1.2.1.43.10.2.1.4.1.1"
            COMMUNITY_STRING = 'public'
            
            total_page_counter = await snmp_get(ip_printter, COMMUNITY_STRING, oid)
            
            return total_page_counter or 0
        except Exception as err: 
            print("printtterModel.get_total_page_counter >>> ", err)
            return []
        
    async def current_toner_level(self, ip_printter):
        try:
            OID = "1.3.6.1.2.1.43.10.2.1.4.1.1"
            COMMUNITY_STRING = 'public'
            
            total_page_counter = await snmp_get(ip_printter, COMMUNITY_STRING, OID)
            
            return total_page_counter
        except Exception as err: 
            print("printtterModel.get_total_page_counter >>> ", err)
            return []