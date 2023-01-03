from flask import Blueprint, render_template, request, redirect, jsonify
import requests
import json

views = Blueprint('views', __name__)

@views.route('/', methods=['GET', 'POST'])
def home():

    if request.method == 'POST':
        print(json.loads(request.data))
        pokeId = json.loads(request.data)
        pokeId = pokeId['id']
        pokemon = pokeApi(pokeId)
        return render_template("index.html", pokemon=pokemon)
    else:
        pokemon = pokeApi(1) 
        return render_template("index.html", pokemon=pokemon)

def pokeApi(idPoke):
    api = f'https://pokeapi.co/api/v2/pokemon/{idPoke}'
    res = requests.get(api)
    pokemon = res.json()

    data = {
        "number" : pokemon['id'],
        "name" : pokemon['name'],
        "height" : pokemon['height'],
        "weight" : pokemon['weight'],
        "sprite" : pokemon['sprites']['versions']['generation-v']['black-white']['animated']['front_default'],
    }
    
    return data