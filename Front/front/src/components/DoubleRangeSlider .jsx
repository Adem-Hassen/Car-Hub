import React, { useEffect, useState } from 'react';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import "./DoubleRangeSlider.css";




const DoubleRangeSlider = (props) => {
  const [range, setRange] = useState([0,0]);
useEffect(() => {
  if(props.reset){
    setRange([0,0]);
  }
},[props.reset])
  const handleChange = (value) => {
 
    setRange(value);
    props.onFilter(value);
    
  };

  return (
    <div style={{ width: '80%', margin: '20px auto' }}>
      <h6>{props.name}: {range[0]} {props.unity} - {range[1]} {props.unity}</h6>
      <Slider range
        min={props.min}
        max={props.max}
        defaultValue={[0, props.max]}
        value={range}
        onChange={handleChange}
    step={props.step}
    
        
      />
    </div>
  );
};

export default DoubleRangeSlider;
