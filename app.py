from flask import Flask, render_template, jsonify
from sqlalchemy import create_engine, inspect
import pandas as pd

# flask app setup
app = Flask(__name__)

@app.route("/api")
def api():
    # database setup
    engine = create_engine("sqlite:///Data/sa_crime_new.sqlite")
    conn = engine.connect()
    data = pd.read_sql("SELECT * FROM crime_data", conn)
    json_data = data.to_json(orient='records')
    
    return json_data

    # return render_template("analysis.html")

@app.route("/")
def index():

    return render_template("index.html")



@app.route("/analysis")
def analysis():

    return render_template("analysis.html")


@app.route("/maps")
def maps():

    return render_template("maps.html")    

@app.route("/api/lev1")
def lev1():
    engine = create_engine("sqlite:///Data/sa_crime_new.sqlite")
    conn = engine.connect()
    data = pd.read_sql("SELECT offence1, count FROM crime_data", conn)
    return data.groupby(["offence1"]).sum()["count"].reset_index().to_json(orient="records")
    



if __name__ == "__main__":
    app.run(debug=True)