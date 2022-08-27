from flask import render_template, url_for, flash, redirect, request, abort, jsonify
from portfolio import app, db



@app.route("/")
@app.route("/home")
def home():
    return render_template('index.html')

@app.route("/about")
def about():
    return render_template('index.html')