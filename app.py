from flask import Flask, render_template, jsonify
from sqlalchemy import create_engine, inspect
import pandas as pd

# flask app setup
app = Flask(__name__)

@app.route("/api")
def api():
    # database setup
    engine = create_engine("sqlite:///combined_data.sqlite")
    conn = engine.connect()
    data = pd.read_sql("SELECT * FROM combined_data", conn)
    # print(data)
    json_data = data.to_json(orient='records')

    return json_data
    # return render_template("analysis.html")

@app.route("/")
def index():

    return render_template("index.html")

@app.route("/analysis")
def analysis():

    return render_template("analysis.html")

if __name__ == "__main__":
    app.run(debug=True)