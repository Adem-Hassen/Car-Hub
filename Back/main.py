from fastapi import FastAPI,Query
from fastapi.middleware.cors import CORSMiddleware
from services.fetch_services import fetch_cars,filter_cars
from models.Models import Resqest
from database.DB import db
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_methods=["*"], 
    allow_headers=["*"], 
)

@app.get("/get_cars")
async def get_all_cars(page: int = Query(1, ge=1), limit: int = Query(12, le=1000)):
    
    skip = (page - 1) * limit
    cars = await fetch_cars(skip=skip, limit=limit) 
    total_cars=await db["car_listings"].count_documents({})
    return {"total_cars": total_cars,"cars": cars}

@app.post("/filter_cars")
async def get_filtered_cars(request:Resqest,page: int = Query(1, ge=1), limit: int = Query(12, le=1000)):
    price_max=request.price_max if request.price_max  else 1000000
    price_min=request.price_min if request.price_min  else 0
    mileage_max=request.mileage_max if request.mileage_max  else 1000000  
    mileage_min=request.mileage_min if request.mileage_min  else 0
    max_year=request.max_year if request.max_year  else "2025"
    min_year=request.min_year if request.min_year  else "1990"
    governorates=request.governorate if request.governorate  else ['Ariana', 'Tunis', 'Ben Arous', 'Sfax', 'Sousse', 'Nabeul', 'Medenine', 'Monastir', 'Manouba', 'Bizerte', 'Jendouba', 'Kasserine', 'Mahdia', 'Gabes', 'Kairouan', 'Sidi Bouzid', 'Tataouine', 'Tozeur', 'Kef', 'Gafsa', 'Beja', 'Siliana', 'Kébili', 'Zaghouan']
    gearbox=request.gearbox if request.gearbox  else ['Manuelle', 'Automatique']
    energy=request.energy if request.energy  else ['Diesel', 'Essence', 'Hybride essence', 'Hybride', 'GPL', 'Hybride Diesel', 'Electrique', 'Autre']
    limit=request.limit if request.limit  else 12
    skip = (page - 1) * limit
    print(price_max ,price_min ,mileage_max ,mileage_min ,max_year ,min_year ,governorates ,gearbox ,energy ,limit ,skip)
    cars=await filter_cars(price_max=price_max,price_min=price_min,mileage_max=mileage_max,mileage_min=mileage_min,max_year=max_year,min_year=min_year,governorates=governorates,gearbox=gearbox,energy=energy,limit=limit,skip=skip)
    return {"total_cars": len(cars),"cars": cars}