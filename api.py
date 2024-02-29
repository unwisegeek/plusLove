import flask
from random import randint
from flask import request, jsonify
from flask_wtf import CSRFProtect

app = flask.Flask(__name__)
app.secret_key = b'_53oi3uriq9pifpff;apl'
csrf = CSRFProtect(app) 
app.config["DEBUG"] = True

pickupLines= [
    {
       "pickupLine": "You are cute!"
    }
   
]





#def populateAPI():
#     i = 0
#     file = open("pickuplines.txt", "r")
#     for line in file:
#         object = {
#             "pickupLine": line
#         }
#         pickupLines.append(object)
#     file.close()

def populateAPI():
    pickupLines = open("pickuplines.txt", "r").readlines()
    return pickupLines

@app.route('/', methods=['GET'])
def home():
    return "sjfdhsfhjskd"




@app.route('/randomQuote' ,  methods=['GET'])
def getRandomQuote():
    linelist = populateAPI()
    randomNumber = randint(0, len(linelist) - 1)
    response = flask.jsonify({ "pickupLine": linelist[randomNumber] })
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

app.run()
