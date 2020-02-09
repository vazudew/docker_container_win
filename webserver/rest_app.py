
#!/usr/bin/env python
# -*- coding: utf-8 -*-

from flask import Flask, request
from flask_cors import CORS

import json

myApp = Flask(__name__)
CORS(myApp)

countryCityDict = {
    "india"    : ["New Delhi", "Bangalore", "Chennai", "Kolkota", "Mumbai"],
    "pakistan" : ["Islamabad", "Lahore", "Peshawar", "Karachi"],
    "germany" : ["Berlin", "Munich", "Hamburg", "Frankfurt", "Dresden"]
    }

@myApp.route("/")
def default():
    return json.dumps("Hello World")

@myApp.route("/countries", methods=["GET"])
def getAllCountries():
    listCountries = list(countryCityDict.keys())
    return json.dumps(listCountries)

@myApp.route("/cities", methods=["GET"])
def getAllCities():
    listCountries = []
    for cityList in countryCityDict.values():
        listCountries.extend(cityList)
    return json.dumps(listCountries)

@myApp.route("/<country>/cities", methods=["GET"])
def getCitiesofACountry(country):
    return json.dumps(countryCityDict[country])

@myApp.route("/countries/<country>/<city>", methods=["POST"])
def addACitytoCountry(country, city):
    if city not in countryCityDict[country]:
        countryCityDict[country].append(city) 
    return json.dumps(countryCityDict[country])

@myApp.route("/countries/<country>/<city>", methods=["DELETE"])
def deleteACitytoCountry(country, city):
    countryCityDict[country].remove(city)
    return json.dumps(countryCityDict[country])

if __name__ == "__main__":
    myApp.run(host="0.0.0.0", port=int("8891"), debug=True)