from flask import Blueprint, request, jsonify
from controller.printerController import printerController
import asyncio

printer_bp = Blueprint('printer', __name__, url_prefix="/printer")


@printer_bp.route('/teste', methods=['GET'])
def main():
    return jsonify({
        "message": "menssagem"
    })
    

@printer_bp.route('/get_total_page_counter', methods=['GET'])
def get_total_page_counter():
    if request.method == "GET":
        
        printer_ctr = printerController()
        result = asyncio.run(printer_ctr.total_page_counter_list())
        
        return result
    
@printer_bp.route('/get_printer_info', methods=['POST', 'GET'])
def get_printer_info():
    if request.method == "GET":
        
        printer_ctr = printerController()
        result = asyncio.run(printer_ctr.printer_info())
        
        return result