from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config['SECRET_KEY'] = '5791628bb0b13ce0c676dfde280ba245'
# Below is elephant sql database 
# app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://jowfndzs:s_fKMzxmDIg6D1gpNd2s_fLNlahUzEh3@heffalump.db.elephantsql.com/jowfndzs'
# Below is Heroku database  
# app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://lldbmokvitqdzv:b907bebfd62170edc9b76cef753774986c254f2f326897b971d884346c4076a3@ec2-52-72-56-59.compute-1.amazonaws.com:5432/d5cg5ig2v1po9f'
db = SQLAlchemy(app)

from portfolio import routes

# To create Database go into Python, >>>from carflask import db           >>>db.create_all()     
# To delete Database go into Python, >>>from carflask import db           >>>db.drop_all()