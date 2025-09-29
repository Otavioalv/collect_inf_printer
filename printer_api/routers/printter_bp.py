from flask import Blueprint, request, jsonify
from controller.printterController import printterController
import asyncio

printter_bp = Blueprint('printter', __name__, url_prefix="/printter")


@printter_bp.route('/teste', methods=['GET'])
def main():
    return jsonify({
        "message": "menssagem"
    })
    

@printter_bp.route('/get_total_page_counter', methods=['GET'])
def get_total_page_counter():
    if request.method == "GET":
        
        printter_ctr = printterController()
        result = asyncio.run(printter_ctr.total_page_counter_list())
        
        return result
    
@printter_bp.route('/get_printter_info', methods=['POST', 'GET'])
def get_printter_info():
    if request.method == "GET":
        
        printter_ctr = printterController()
        result = asyncio.run(printter_ctr.printter_info())
        
        return result