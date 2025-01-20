from database.DB import db
import random

async def fetch_cars(limit=100,skip=0):
    cursor = db["car_listings"].find().skip(skip).limit(limit)
    cars= await cursor.to_list(length=limit)
    return cars 


async def filter_cars(price_max=None,price_min=None,mileage_max=None,mileage_min=None,max_year=None,min_year=None,governorates=None,energy=None,gearbox=None,limit=10,skip=0):
    query = {"$and":[]}
    if price_max :
        query["$and"].append({"Price(DT)":{"$lte":price_max}})
    if price_min : 
        query["$and"].append({"Price(DT)":{"$gte":price_min}})
    if mileage_max :
        query["$and"].append({"Mileage(Km)":{"$lte":mileage_max}})
    if mileage_min :
        query["$and"].append({"Mileage(Km)":{"$gte":mileage_min}})
    if max_year :
        query["$and"].append({"Year":{"$lte":max_year}})
    if min_year :
        query["$and"].append({"Year":{"$gte":min_year}})
    if governorates :
        query["$and"].append({"Governorate":{"$in":governorates}})
    if energy :
        query["$and"].append({"Energy":{"$in":energy}})
    if gearbox :
        query["$and"].append({"Gearbox":{"$in":gearbox}})

    cursor = db["car_listings"].find(query).skip(skip)
    cars=await cursor.to_list(length=limit)    
    return cars