import React from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import "./Home.css"
import axios from 'axios'
const Home = () => {
 
  const navigate = useNavigate()
  const onClick = async () => {

  const response = await axios.get('http://127.0.0.1:8000/get_cars')
  if (response.status==200){
    console.log(response.data)
    
  }
  navigate('/cars',{state:{cars:response.data.cars}})
  }
  return (
    <div className='container'>
      <div className='title'>
        <h1 className='car'>Car </h1> <h1 className="hub">Hub</h1></div>
        <p >
        All the top used car listings in Tunisia collected in one place for you!
</p>
<Button className='btn-start' variant='light' onClick={onClick}>Discover now </Button>

    </div>
  )
}

export default Home