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
    data = pd.read_sql("SELECT * FROM main_df", conn)
    json_data = data.to_json(orient='records')
    
    return json_data






@app.route("/")
def index():

    return render_template("index.html")


###########################################################
# LEVEL 1 DATA

@app.route("/lev1")
def lev1():
    # database setup
    engine = create_engine("sqlite:///Data/sa_crime_new.sqlite")
    conn = engine.connect()
    lev1 = pd.read_sql("SELECT * FROM lev1_combined", conn)
    # json_data = lev1.to_json(orient='records')
    return lev1
    return render_template("lev1.html")





###########################################################
# LEVEL 2 DATA
@app.route("/lev2")
def lev2():
    # database setup
    engine = create_engine("sqlite:///Data/sa_crime_new.sqlite")
    conn = engine.connect()
    lev2 = pd.read_sql("SELECT * FROM lev2_combined", conn)
    json_data = lev2.to_json(orient='records')
    return json_data
    # return render_template("lev2.html")




###########################################################
# LEVEL 3 DATA
@app.route("/lev3")
def lev3():
    # database setup
    engine = create_engine("sqlite:///Data/sa_crime_new.sqlite")
    conn = engine.connect()
    lev3 = pd.read_sql("SELECT * FROM lev3_combined", conn)
    json_data = lev3.to_json(orient='records')
    return json_data





@app.route("/analysis")
def analysis():
    return render_template("analysis.html")


@app.route("/maps")
def maps():
    return render_template("maps.html")    




@app.route("/api/lev1")
def api_lev1():
    engine = create_engine("sqlite:///Data/sa_crime_new.sqlite")
    conn = engine.connect()
    data = pd.read_sql("SELECT offence1, count FROM main_df", conn)
    return data.groupby(["offence1"]).sum()["count"].reset_index().to_json(orient="records")



@app.route("/api/lev2")
def api_lev2():
    engine = create_engine("sqlite:///Data/sa_crime_new.sqlite")
    conn = engine.connect()
    data = pd.read_sql("SELECT offence2, count FROM main_df", conn)
    return data.groupby(["offence2"]).sum()["count"].reset_index().to_json(orient="records")

        
@app.route("/api/lev3")
def api_lev3():
    engine = create_engine("sqlite:///Data/sa_crime_new.sqlite")
    conn = engine.connect()
    data = pd.read_sql("SELECT offence3, count FROM main_df", conn)
    return data.groupby(["offence3"]).sum()["count"].reset_index().to_json(orient="records")


@app.route("/api/map")
def map():
    engine = create_engine("sqlite:///Data/sa_crime_new.sqlite")
    conn = engine.connect()
    data = pd.read_sql("SELECT locality, count, lat, long FROM main_df", conn)
    return data.groupby(["locality","lat","long"]).sum()["count"].reset_index().to_json(orient="records")


if __name__ == "__main__":
    app.run(debug=True)