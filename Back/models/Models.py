from pydantic import BaseModel


class Resqest(BaseModel):
    price_max:float=None
    price_min:float=None
    mileage_max:float=None
    mileage_min:float=None
    max_year:str=None
    min_year:str=None
    governorate:list[str]=None
    gearbox:list[str]=None
    energy:list[str]=None
    limit:int=10
    skip:int=0