import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col, InputGroup, DropdownButton, Dropdown } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import DoubleRangeSlider from './DoubleRangeSlider ';
import './FilterComp.css';

const FilterComp = ({ onFilter, onSearch, onReset }) => {
  const [reset, setReset] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [price, setPrice] = useState([]);
  const [mileage, setMileage] = useState([]);
  const [year, setYear] = useState([]);
  const governorates = ['Ariana', 'Tunis', 'Ben Arous', 'Sfax', 'Sousse', 'Nabeul', 'Medenine', 'Monastir', 'Manouba', 'Bizerte', 'Jendouba', 'Kasserine', 'Mahdia', 'Gabes', 'Kairouan', 'Sidi Bouzid', 'Tataouine', 'Tozeur', 'Kef', 'Gafsa', 'Beja', 'Siliana', 'Kébili', 'Zaghouan'];

  const [selectedGovernorates, setSelectedGovernorates] = useState([]);
  const [selectedFuelTypes, setSelectedFuelTypes] = useState([]);
  const [selectedGearboxes, setSelectedGearboxes] = useState([]);

  useEffect(() => {
    if (reset) {
      setSelectedGovernorates([]);
      setSelectedFuelTypes([]);
      setSelectedGearboxes([]);
    }
  }, [reset]);  

  const handleCheckboxChange = (setState, currentValue, checked) => {
    setState((prev) =>
      checked ? [...prev, currentValue] : prev.filter((value) => value !== currentValue)
    );
  };

  const handlePrice = (value) => setPrice(value);
  const handleMileage = (value) => setMileage(value);
  const handleYear = (value) => setYear([value[0].toString(), value[1].toString()]);

  const Search = () => {
    setReset(false);
    onFilter({
      price,
      mileage,
      year,
      governorates: selectedGovernorates,
      energy: selectedFuelTypes,
      gearbox: selectedGearboxes,
    });
  };

  const handleSearchChange = (e) => {
    setReset(false);
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  const handleReset = () => {
    setReset(true);  
    setSearchTerm('');
    setPrice([]);
    setMileage([]);
    setYear([]);
    setSelectedGovernorates([]);
    setSelectedFuelTypes([]);
    setSelectedGearboxes([]);
    onReset();
  };

  return (
    <div>
      <Form className="p-3 border rounded bg-light">
        <h5 className="mb-3">Filter Cars</h5>

        <InputGroup className="mb-3">
          <Form.Control
            type="text"
            placeholder="Search by Model or Brand"
            value={searchTerm}
            onChange={handleSearchChange}
            style={{ backgroundColor: "#e0dddd" }}
          />
        </InputGroup>

        <Row className="mb-3">
          <Col>
            <DoubleRangeSlider reset={reset} onFilter={handlePrice} name="Price" max={500000} unity="DT" step={5000} />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <DoubleRangeSlider reset={reset} onFilter={handleMileage} name="Mileage" max={500000} unity="Km" step={5000} />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <DoubleRangeSlider reset={reset} onFilter={handleYear} name="Year" max={2025} min={1990} unity="" step={1} />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <h6>Governorates:</h6>
            <DropdownButton bsPrefix="dropdown-btn" title="Choose">
              {governorates.map((governorate) => (
                <div key={governorate} className="custom-checkbox">
                  <input
                    type="checkbox"
                    id={`checkbox-${governorate}`}
                    checked={selectedGovernorates.includes(governorate)}  // Bind checked state to selectedGovernorates
                    onChange={(e) => handleCheckboxChange(setSelectedGovernorates, governorate, e.target.checked)}
                  />
                  <label htmlFor={`checkbox-${governorate}`}>{governorate}</label>
                </div>
              ))}
            </DropdownButton>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <h6>Fuel Types:</h6>
            {['Diesel', 'Essence', 'Hybride essence', 'Hybride', 'GPL', 'Hybride Diesel', 'Electrique', 'Autre'].map((fuel) => (
              <div key={fuel} className="custom-checkbox">
                <input
                  type="checkbox"
                  id={`checkbox-${fuel}`}
                  checked={selectedFuelTypes.includes(fuel)}  // Bind checked state to selectedFuelTypes
                  onChange={(e) => handleCheckboxChange(setSelectedFuelTypes, fuel, e.target.checked)}
                />
                <label htmlFor={`checkbox-${fuel}`}>{fuel}</label>
              </div>
            ))}
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <h6>Gearbox:</h6>
            {['Manuelle', 'Automatique'].map((gearbox) => (
              <div key={gearbox} className="custom-checkbox">
                <input
                  type="checkbox"
                  id={`checkbox-${gearbox}`}
                  checked={selectedGearboxes.includes(gearbox)}  // Bind checked state to selectedGearboxes
                  onChange={(e) => handleCheckboxChange(setSelectedGearboxes, gearbox, e.target.checked)}
                />
                <label htmlFor={`checkbox-${gearbox}`}>{gearbox}</label>
              </div>
            ))}
          </Col>
        </Row>

        <div style={{ width: "100px" }}>
          <Button variant="light" onClick={Search} className="w-100">
            Filter
          </Button>
        </div>
        <div style={{ width: "100px", marginTop: "5px" }}>
          <Button variant="light" onClick={handleReset} className="w-200">
            Reset
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default FilterComp;
