import sqlite3
import os

def init_db():
    # get the OS to create new folder if it does not exist
    os.makedirs("database", exist_ok=True)
    conn = sqlite3.connect("database/drink_db.db")
    cursor = conn.cursor()
    cursor.execute('''CREATE TABLE IF NOT EXISTS drink(
                        drink_ID INTEGER PRIMARY KEY AUTOINCREMENT,
                        drink_name TEXT UNIQUE NOT NULL,
                        drink_brand TEXT NOT NULL,
                        drink_price REAL NOT NULL)
                   ''')
    conn.commit()
    conn.close()