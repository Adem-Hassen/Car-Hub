import React from 'react';
import { Card } from 'react-bootstrap';
import { FaRoad } from 'react-icons/fa';
import { GiCalendarHalfYear } from 'react-icons/gi';
import { TbManualGearboxFilled } from 'react-icons/tb';
import { BsFillFuelPumpFill } from 'react-icons/bs';
import { PiEngineFill } from 'react-icons/pi';
import { MdPlace } from "react-icons/md";

import "./CarItem.css";
const CarItem = (props) => {
  return (
    <a href={props.Original}  target="_blank" rel="noopener noreferrer" className="card-link"> <Card className="car-card">
    <Card.Img    variant="top" src={props.Image} alt={props.Model} className="card-img" />

    <Card.Body>
      <Card.Title className="car-model">{props.Model}</Card.Title>
      <Card.Subtitle className="car-price">{props.Price} DT</Card.Subtitle>
      
      <div className="car-details">
        <Card.Text className="car-info">
          <FaRoad />{props.Mileage} km
        </Card.Text>
        <Card.Text className="car-info">
          <GiCalendarHalfYear />{props.Year}
        </Card.Text>
        <Card.Text className="car-info">
          <TbManualGearboxFilled />{props.Gearbox}
        </Card.Text>
        <Card.Text className="car-info">
          <BsFillFuelPumpFill />{props.Energy} 
        </Card.Text>
        <Card.Text className="car-info">
          <PiEngineFill />{props.TaxHorsepower} CV
        </Card.Text>
        <Card.Text className="car-info">
        <MdPlace />{props.Governorate}
        </Card.Text>
      </div>
    </Card.Body>
  </Card> </a>
    
  );
};

export default CarItem;
