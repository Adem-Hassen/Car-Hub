import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Pagination } from 'react-bootstrap';
import CarItem from '../components/CarItem';  
import axios from 'axios';  
import { useLocation } from 'react-router-dom';
import PaginationComp from '../components/Pagination';
import NavbarComp from '../components/Navbar';
import FilterComp from '../components/FilterComp';
const Main = () => {
const location = useLocation()
const[searchTerm,setSearchTerm] = useState("")
  const [filter,setFilter]=useState(false)
  const[request,setRequest] = useState({})
  const[searchedCars,setSearchedCars] = useState([])
  const [cars, setCars] = useState(location.state.cars);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchCars = async (page) => {
    try {
      const response = await axios.get(`http://localhost:8000/get_cars?page=${page}`,{
        headers: {
          "Content-Type": "application/json",
        },
      });
      setCars(response.data.cars);
    
      setTotalPages(Math.ceil(response.data["total_cars"]/ 12));  
    } catch (error) {
      console.error("Error fetching cars", error);
    }
  };

  useEffect(() => {
   
    if (filter===true){
      
      FiltredCars(currentPage)
    }
    else{
      fetchCars(currentPage);
    }
  }, [currentPage,filter,request]);
const onFilter= (value) => {
  
setRequest({
  "price_max": value.price[1],
  "price_min": value.price[0],
  "mileage_max": value.mileage[1],
  "mileage_min":  value.mileage[0],
  "max_year": value.year[1],
  "min_year": value.year[0],
  "governorate": value.governorates,
  "energy": value.energy,
  "gearbox":value.gearbox,
  "limit": 12,
})

setCurrentPage(1)
setFilter(true)
FiltredCars(currentPage)
}
const FiltredCars=async (page)=>{
  console.log(request)
  const response= await axios.post(`http://localhost:8000/filter_cars?page=${page}`,request,{
    headers: {
      "Content-Type": "application/json",
    },
  })
  if (response.status==200){
  
    setCars(response.data.cars)
    
  }
}
const onSearch=(value)=>{
  if(value){
    setSearchTerm(value);
    setSearchedCars(cars.filter((car)=>car.Model.toLowerCase().includes(value.toLowerCase())))
    
  }
  else{
    setSearchTerm("");
    setSearchedCars([])
  }

}
const onReset=()=>{
  setCurrentPage(1)
  setFilter(false)
  setRequest({})
  }
  return (
    <div>
        <NavbarComp></NavbarComp>
        
     <Container fluid className="mt-4">
  <Row>

    <Col xs={12} md={3} lg={3} className="mb-4">
    <div style={{ 
        backgroundColor: "#f8f9fa", 
        padding: "10px", 
        borderRadius: "8px", 
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", 
        height: "50%", 
       
      }}>
        <FilterComp onFilter={onFilter} onSearch={onSearch} onReset={onReset} />
      </div>
    </Col>

   
    <Col xs={12} md={9} lg={8}>
      <Row>
        {(searchedCars.length>0  || searchTerm )? searchedCars.map((car, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <CarItem
              Image={car.Image}
              Model={car.Model}
              Price={car["Price(DT)"]}
              Year={car.Year}
              Mileage={car["Mileage(Km)"]}
              Energy={car.Energy}
              Gearbox={car.Gearbox}
              TaxHorsepower={car["Tax Horsepower(CV)"]}
              Governorate={car.Governorate}
              Original={car["Original Post"]}
            />
          </Col>
        )):cars.map((car, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <CarItem
              Image={car.Image}
              Model={car.Model}
              Price={car["Price(DT)"]}
              Year={car.Year}
              Mileage={car["Mileage(Km)"]}
              Energy={car.Energy}
              Gearbox={car.Gearbox}
              TaxHorsepower={car["Tax Horsepower(CV)"]}
              Governorate={car.Governorate}
              Original={car["Original Post"]}
            />
          </Col>
        ))}
      </Row>

      {/* Pagination */}
      <div className="d-flex justify-content-center mt-4">
        <PaginationComp
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </Col>
  </Row>
</Container>

    </div>
  );
};

export default Main;
