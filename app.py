from flask import Flask, request, jsonify
from flask_cors import CORS
from routers.printter_bp import printter_bp

app = Flask(__name__)
CORS(app, origins=["*"])


@app.route('/health', methods=['GET'])
def health():
    return jsonify({"status": "healthy"})


app.register_blueprint(printter_bp)

if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)