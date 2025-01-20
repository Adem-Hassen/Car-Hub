import json
from pymongo import MongoClient

client = MongoClient("mongodb://127.0.0.1:27017/")
  
db = client["used_cars_db"]                        
collection = db["car_listings"]                     


with open("cars.json", "r") as file:
    data = json.load(file)


if isinstance(data, list):
    collection.insert_many(data)  
else:
    collection.insert_one(data)   

print("Data inserted successfully into MongoDB.")
