import flask
from random import randint
from flask import jsonify, request, Response
from flask_wtf import CSRFProtect

app = flask.Flask(__name__)
app.secret_key = b'_53oi3uriq9pifpff;apl'
csrf = CSRFProtect(app) 
app.config["DEBUG"] = True

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
    return open("pickuplines.txt", "r").readlines()

@app.route('/', methods=['GET'])
def home():
    return Response(status=404)


@app.route('/randomQuote' ,  methods=['GET'])
def getRandomQuote():
    # linelist = populateAPI()
    # response = flask.jsonify({ "pickupLine": linelist[randint(0, len(linelist) - 1] })
    # The above lines are for when you start adding to pickuplines.txt
    # The below line is an example of how you can get Python to do as much as possible
    response = flask.jsonify({ "pickupLine": f"{ populateAPI()[randint(0, len(populateAPI()) - 1)] }" })
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

app.run()
