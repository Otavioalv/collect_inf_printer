from utils.snmpCnn import snmp_get
from consts.PRINTER_IP_LIST import PRINTER_IP_LIST

import asyncio


""" 
Capacidade máxima do toner: 1.3.6.1.2.1.43.11.1.1.8.1.1. // porcentagem
Nível atual do toner: 1.3.6.1.2.1.43.11.1.1.9.1.1 // porcentagem de paginas restantes
black: 1.3.6.1.2.1.43.12.1.1.4.1.1
Instruções: 1.1.2.1.5.61.34.1.2.1.6.3.0
Descrição: 1.3.6.1.2.1.43.16.5.1.2.1.1
"""

# PRINTER_IP = '172.36.15.2'
COMMUNITY_STRING = 'public' # Meio de comunicação
# OID = "1.3.6.1.2.1.43.10.2.1.4.1.1"
# OID = "1.3.6.1.2.1.43.5.1.1.17.1"
# OID = "1.3.6.1.2.1.43.11.1.1.9.1.1"

# OKI (SNMP DESABILITADO EM TODAS)
OID = "1.3.6.1.4.1.2001.1.1.1.1.2.30"



# async def snmp_get(host, community, oid):
print(asyncio.run(snmp_get("172.28.15.1", COMMUNITY_STRING, OID)))

# print(asyncio.run(snmp_get("10.16.8.1", COMMUNITY_STRING, "1.3.6.1.2.1.25.3.2.1.3.1")))
# serial_number = await self.printer_md.printer_snmp_connect(ip, "1.3.6.1.2.1.43.5.1.1.17.1")

# for sector, ip in PRINTER_IP_LIST.items():
#     # print(sector, ip)
#     counter_page = asyncio.run(snmp_get(ip, COMMUNITY_STRING, OID)) or 0
#     # print(int((counter_page / 100) * 8000))
#     print(f"{sector},{ip},{int((counter_page / 100) * 8000)}")    
    # print(asyncio.run(snmp_get(ip, COMMUNITY_STRING, OID)))
