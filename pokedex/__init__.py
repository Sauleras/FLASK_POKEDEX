from flask import Flask
from os import path
import secrets 

def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = secrets.token_hex(16)

    from .views import views

    app.register_blueprint(views, url_prefix='/')

    return app