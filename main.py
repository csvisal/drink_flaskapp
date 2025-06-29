from flask import Flask, render_template, request
import sqlite3

main = Flask(__name__)

@main.route("/")
def home():
    return render_template("index.html")

@main.route("/add", methods=["GET" ,"POST"])
def add():
    # POST method - assign variable and fetch input from HTML
    if request.method == "POST":
        add_drink_name = request.form["add_drink_name"].strip()
        add_drink_brand = request.form["add_drink_brand"].strip()
        add_drink_price = request.form["add_drink_price"].strip()
        # throw input from html into table columns
        try:
            conn = sqlite3.connect("database/drink_db.db")
            cursor = conn.cursor()
            cursor.execute('''INSERT INTO drink(drink_name, drink_brand, drink_price)
                                VALUES(?, ?, ?)''',
                        (add_drink_name, add_drink_brand, add_drink_price))
            conn.commit()
            conn.close()
            validation_message = "Drink added successfully"
            return render_template("add.html", validation_message=validation_message)

        except sqlite3.IntegrityError:
            validation_message = "Drink already exists"
            return render_template("add.html", validation_message=validation_message)
    return render_template("add.html")

@main.route("/search", methods=["GET", "POST"])
def search():
    if request.method == "POST":
        search_drink_name = request.form["search_drink_name"]
        conn = sqlite3.connect("database/drink_db.db")
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM drink WHERE drink_name = ?", (search_drink_name,))
        drink_data = cursor.fetchall()
        conn.close()
        message = None
        if not drink_data:
            message = "Drink not found!"
        return render_template("search.html", drink_data=drink_data, message=message)
    else:
        return render_template("search.html")
if __name__ == "__main__":
    main.run(port=5001, debug=True)
