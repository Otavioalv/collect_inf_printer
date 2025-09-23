"""
sso lista tudo que a impressora expõe.

No Python: coletar oid (1.3.6.1.2.1)

from pysnmp.hlapi import *


printer_ip = "172.36.15.2"
printer_port = 161 # or 160/162
printer_oid = "1.3.6.1.2.1"



for (errorIndication, errorStatus, errorIndex, varBinds) in nextCmd(
    SnmpEngine(),
    CommunityData("public", mpModel=0),
    UdpTransportTarget((printer_ip, printer_port)),
    ContextData(),
    ObjectType(ObjectIdentity(printer_oid)),
    lexicographicMode=False
):
    if errorIndication:
        print(errorIndication)
        break
    elif errorStatus:
        print(errorStatus.prettyPrint())
        break
    else:
        for varBind in varBinds:
            print(varBind)
 """
 
 
from pysnmp.hlapi import *

def get_printer_info(host, community, oid):
    """
    Busca uma informação específica (OID) de um dispositivo via SNMP.
    """
    errorIndication, errorStatus, errorIndex, varBinds = next(
        getCmd(SnmpEngine(),
               CommunityData(community, mpModel=0),
               UdpTransportTarget((host, 161)),
               ContextData(),
               ObjectType(ObjectIdentity(oid)))
    )

    if errorIndication:
        print(errorIndication)
        return None
    elif errorStatus:
        print(f'{errorStatus.prettyPrint()} at {errorIndex and varBinds[int(errorIndex) - 1][0] or "?"}')
        return None
    else:
        for varBind in varBinds:
            # Retorna o valor como uma string
            return str(varBind[1])

# --- INFORMAÇÕES DA SUA IMPRESSORA ---
PRINTER_IP = '172.36.15.2' # Substitua pelo IP da sua impressora
COMMUNITY_STRING = 'public'   # Use a community string configurada na impressora

# --- OIDs COMUNS PARA IMPRESSORAS (PODE VARIAR UM POUCO) ---
OID_MODEL = '1.3.6.1.2.1.25.3.2.1.3.1'
OID_SERIAL_NUMBER = '1.3.6.1.2.1.43.5.1.1.17.1'
OID_TOTAL_PAGE_COUNT = '1.3.6.1.2.1.43.10.2.1.4.1.1'
OID_TONER_LEVEL_MAX = '1.3.6.1.2.1.43.11.1.1.8.1.1' # Capacidade máxima do toner
OID_TONER_LEVEL_CURRENT = '1.3.6.1.2.1.43.11.1.1.9.1.1' # Nível atual do toner

# --- BUSCANDO OS DADOS ---
model = get_printer_info(PRINTER_IP, COMMUNITY_STRING, OID_MODEL)
serial = get_printer_info(PRINTER_IP, COMMUNITY_STRING, OID_SERIAL_NUMBER)
page_count = get_printer_info(PRINTER_IP, COMMUNITY_STRING, OID_TOTAL_PAGE_COUNT)
toner_current = get_printer_info(PRINTER_IP, COMMUNITY_STRING, OID_TONER_LEVEL_CURRENT)
toner_max = get_printer_info(PRINTER_IP, COMMUNITY_STRING, OID_TONER_LEVEL_MAX)


print(f"Modelo da Impressora: {model}")
print(f"Número de Série: {serial}")
print(f"Contagem Total de Páginas: {page_count}")

if toner_current is not None and toner_max is not None and int(toner_max) > 0:
    toner_percentage = (int(toner_current) / int(toner_max)) * 100
    print(f"Nível do Toner: {toner_current} / {toner_max} ({toner_percentage:.2f}%)")